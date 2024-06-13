'use strict';

/**
 * contact-form service
 */

const { createCoreService } = require('@strapi/strapi').factories;
const fs = require('fs');
const path = require('path');


module.exports = createCoreService('api::contact-form.contact-form', ({ strapi }) => ({
    async sendForm(...params) {
        const [first_name, last_name, phone_number, email, website, message] = params;

        const emailTemplatePath = path.join(__dirname, '../templates/contact-email.html');
        let emailHtml = fs.readFileSync(emailTemplatePath, 'utf8');
        emailHtml = emailHtml.replace('{{email}}', email);

        const contactDetails = await strapi.query('api::contact-form.contact-form').create({
            data: { first_name, last_name, phone_number, email, website, message }
        });

        if (contactDetails) {
            await strapi.plugin('email').service('email').send({
                to: email,
                from: `"${strapi.config.get('plugin.email.settings.defaultFrom')}"`,
                subject: "Thankyou! For Connecting With Us",
                text: 'Thankyou! For connecting with us',
                html: emailHtml
            });
        }
        return { message: 'You have successfully booked a meeting' };
    }
}));
