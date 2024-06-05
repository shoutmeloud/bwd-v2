'use strict';

/**
 * get-consultation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::get-consultation.get-consultation', ({strapi}) => ({

  async consultation(ctx){
    const { full_name, email, phone_number, subject} = ctx.request.body;

    if(!full_name && !email){
      return ctx.badRequest('Full name and Email is required!');
    }

    try{
      const result = await strapi.service('api::get-consultation.get-consultation').getConsultationMail(full_name, email, phone_number, subject)
      ctx.send(result);
    }catch(error){
      ctx.throw(500,'An error occurred while processing your request')
    }

  }

}));
