'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

/**
 * newsletter controller
 */

module.exports = createCoreController('api::newsletter.newsletter', ({ strapi }) => ({
  async subscribe(ctx) {
    const { email } = ctx.request.body;

    if (!email) {
      return ctx.badRequest('Email is required');
    }

    try {
      const result = await strapi.service('api::newsletter.newsletter').subscribe(email);
      ctx.send(result);
    } catch (error) {
      ctx.throw(500, 'An error occurred while processing your request');
    }
  },
}));
