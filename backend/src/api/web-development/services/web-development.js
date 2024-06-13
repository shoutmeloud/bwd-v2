'use strict';

/**
 * web-development service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-development.web-development');
