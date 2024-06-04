'use strict';

/**
 * get-consultation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-consultation.get-consultation');
