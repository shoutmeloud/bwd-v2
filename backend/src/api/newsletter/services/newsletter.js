'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

/**
 * newsletter service
 */

module.exports = createCoreService('api::newsletter.newsletter', ({ strapi }) => ({
    async subscribe(email) 
    {
        const existingSubscriber = await strapi.query('api::newsletter.newsletter').findOne({ where: { email } });
        if (existingSubscriber) {
            return { message: 'This email is already subscribed' };
        }

        const subscribers = await strapi.query('api::newsletter.newsletter').create({ data: { email } });
        if (subscribers) {
            await strapi.plugin('email').service('email').send({
                to: email,
                from: 'info@bigwavedevelopment.com',
                subject: 'Thank you for subscribing to our newsletter!',
                text: 'Hello world',
                html: '<h1>Hello World</h1>'
            });
        }
        return { message: 'Subscription successful and email sent' };
    }
}));
