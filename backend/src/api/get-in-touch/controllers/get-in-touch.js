'use strict';

/**
 * get-in-touch controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::get-in-touch.get-in-touch', ({ strapi }) => ({

    teamUp: async (ctx) => {
        const { full_name, email, contact_number, message } = ctx.request.body;
        // console.log("Controller: " + full_name);
        
        if (!full_name && !email) {
            return ctx.badRequest('Full name and Email is required!');
        }

        try {
            const result = await strapi.service('api::get-in-touch.get-in-touch').getTeamUp(full_name, email, contact_number, message)
            ctx.send(result);
        } catch (error) {
            ctx.throw(500, 'An error occurred while processing your request')
        }
    }
}));
