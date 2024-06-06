'use strict';

/**
 * get-consultation service
 */

const { createCoreService } = require('@strapi/strapi').factories;
const fs = require('fs');
const path = require('path');

module.exports = createCoreService('api::get-consultation.get-consultation', ({strapi}) => ({

  async getConsultationMail(...params){
    const [full_name, email, phone_number, subject] = params;
  
    const emailTemplatePath = path.join(__dirname, '../templates/consultation-email.html');
    let emailHtml = fs.readFileSync(emailTemplatePath, 'utf8');
    emailHtml = emailHtml.replace('{{full_name}}', full_name);

    const consultationDetails = await strapi.query('api::get-consultation.get-consultation').create({
      data: { full_name, email, phone_number, subject }
    });
    
    if (consultationDetails) {
       await strapi.plugin('email').service('email').send({
            to: email,
            from: `"${strapi.config.get('plugin.email.settings.defaultFrom')}"`,
            subject: "Consultation Booking Confirmation",
            text: 'You have successfully booked a meeting',
            html: emailHtml
        });
    }
    return { message: 'You have successfully booked a consultation' };
  }
}));
