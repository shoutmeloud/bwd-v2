'use strict';

/**
 * web-development router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::web-development.web-development');
