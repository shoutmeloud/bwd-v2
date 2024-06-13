'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    // console.log("life cycle: " + result.full_name);
    
    const emailTemplatePath = path.join(__dirname, '../../templates/admin-contact-email.html');
    let emailHtml = fs.readFileSync(emailTemplatePath, 'utf8');
    emailHtml = emailHtml.replace('{{first_name}}', result.first_name);
    emailHtml = emailHtml.replace('{{last_name}}', result.last_name);
    emailHtml = emailHtml.replace('{{email}}', result.email);
    emailHtml = emailHtml.replace('{{phone_number}}', result.phone_number);
    emailHtml = emailHtml.replace('{{website}}', result.website);
    emailHtml = emailHtml.replace('{{message}}', result.message);

    await strapi.plugin('email').service('email').send({
      to: 'souvik.dev@reddensoft.com',
      from: `"${strapi.config.get('plugin.email.settings.defaultFrom')}"`,
      subject: 'New Connection!',
      text: `New Connection`,
      html: emailHtml,
    });
  }
};
