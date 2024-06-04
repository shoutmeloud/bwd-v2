'use strict';

const { createCoreService } = require('@strapi/strapi').factories;
const fs = require('fs');
const path = require('path');

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

        const emailTemplatePath = path.join(__dirname, '../../newsletter/templates/customer-notification.html');
        let emailHtml = fs.readFileSync(emailTemplatePath, 'utf8');
        emailHtml = emailHtml.replace('{{email}}', email);

        const subscribers = await strapi.query('api::newsletter.newsletter').create({ data: { email } });
        if (subscribers) {
            await strapi.plugin('email').service('email').send({
                to: email,
                from: `"${strapi.config.get('plugin.email.settings.defaultFrom')}"`,
                replyTo: `"${strapi.config.get('plugin.email.settings.defaultReplyTo')}"`,
                subject: 'Thank you for subscribing to our newsletter!',
                text: 'You have successfully subscribed to our newsletter.',
                html: emailHtml
            });
        }
        return { message: 'Subscription successful and email sent' };
    }
}));
