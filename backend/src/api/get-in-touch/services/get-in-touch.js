'use strict';

/**
 * get-in-touch service
 */

const { createCoreService } = require('@strapi/strapi').factories;
const fs = require('fs');
const path = require('path');


module.exports = createCoreService('api::get-in-touch.get-in-touch', ({ strapi }) => ({

    getTeamUp: async (...params) => {
        const [full_name, email, contact_number, message] = params;
        // console.log("Service: " + full_name);

        const emailTemplatePath = path.join(__dirname, '../templates/teamup-email.html');
        let emailHtml = fs.readFileSync(emailTemplatePath, 'utf8');
        emailHtml = emailHtml.replace('{{full_name}}', full_name)

        const consultationDetails = await strapi.query('api::get-in-touch.get-in-touch').create({
            data: { full_name, email, contact_number, message }
        });

        if (consultationDetails) {
            await strapi.plugin('email').service('email').send({
                to: email,
                from: `"${strapi.config.get('plugin.email.settings.defaultFrom')}"`,
                subject: "Confirmation mail",
                text: 'Thankyou! Successfully Sent Email',
                html: emailHtml
            });
        }
        return { message: 'Thankyou! Email has been sent successfully' };
    }
}));