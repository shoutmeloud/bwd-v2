'use strict';

/**
 * pay-per-click service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pay-per-click.pay-per-click');
