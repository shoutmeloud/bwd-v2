'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

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
      
      await strapi.plugin('email').service('email').send({
        to: reqData.email,
        from: 'amiit.prasad82@gmail.com',
        subject: 'Hello world',
        text: 'Hello world',
        html: `<h4>Hello world</h4>`,
      });

      ctx.send(newEntry);

    } catch (err) {
      ctx.throw(500, err);
    }
  },

}));
