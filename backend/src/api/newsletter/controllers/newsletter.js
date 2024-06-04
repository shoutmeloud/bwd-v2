'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const nodemailer = require('nodemailer');
const nodemailerConfig = require('../../../../config/nodemailer');


/**
 * newsletter controller
 */

module.exports = createCoreController('api::newsletter.newsletter', ({ strapi }) => ({

  async subscribe(ctx) {
    try {
      const reqData = ctx.request.body;

      if (!reqData.email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(reqData.email)) {
        return ctx.badRequest('Invalid email address');
      }

      const newEntry = await strapi.query('api::newsletter.newsletter').create({ data: reqData });
      
      const transporter = nodemailer.createTransport(nodemailerConfig.smtp);
      await transporter.sendMail({
        from: 'info@bigwavedevelopment.com',
        to: reqData.email,
        subject: 'Thank you for subscribing to our newsletter!',
        text: 'You have successfully subscribed to our newsletter.',
      });

      ctx.send(newEntry);

    } catch (err) {
      ctx.throw(500, err);
    }
  },

}));
