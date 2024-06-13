'use strict';

/**
 * contact-form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-form.contact-form', ({strapi}) => ({

    async send(ctx){
        const {first_name, last_name, phone_number, email, website, message} = ctx.request.body;
        if(!first_name && !last_name && !email ){
            return ctx.badRequest('First name, Last name and Email is required');
        }
        try{
            const result = await strapi.service('api::contact-form.contact-form').sendForm(first_name, last_name, phone_number, email, website, message);
            ctx.send(result);
        }catch(error){
            ctx.throw(500, 'An error occurred while processing your request');
        }
    }
}));
