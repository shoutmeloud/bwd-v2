'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    // console.log(result);
    
    const emailTemplatePath = path.join(__dirname, '../../templates/admin-consultation-email.html');
    let emailHtml = fs.readFileSync(emailTemplatePath, 'utf8');
    emailHtml = emailHtml.replace('{{full_name}}', result.full_name);
    emailHtml = emailHtml.replace('{{email}}', result.email);
    emailHtml = emailHtml.replace('{{phone_number}}', result.phone_number);
    emailHtml = emailHtml.replace('{{subject}}', result.subject);

    await strapi.plugin('email').service('email').send({
      to: 'souvik.dev@reddensoft.com',
      from: `"${strapi.config.get('plugin.email.settings.defaultFrom')}"`,
      subject: 'New Consultation Booking',
      text: `New Consultation Booking`,
      html: emailHtml,
    });
  }
};
