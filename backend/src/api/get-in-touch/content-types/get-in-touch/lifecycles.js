'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    // console.log("life cycle: " + result.full_name);
    
    const emailTemplatePath = path.join(__dirname, '../../templates/admin-teamup-email.html');
    let emailHtml = fs.readFileSync(emailTemplatePath, 'utf8');
    emailHtml = emailHtml.replace('{{full_name}}', result.full_name);
    emailHtml = emailHtml.replace('{{email}}', result.email);
    emailHtml = emailHtml.replace('{{phone_number}}', result.contact_number);
    emailHtml = emailHtml.replace('{{subject}}', result.message);

    await strapi.plugin('email').service('email').send({
      to: 'souvik.dev@reddensoft.com',
      from: `"${strapi.config.get('plugin.email.settings.defaultFrom')}"`,
      subject: 'New Customer Connect',
      text: `New Customer Connect`,
      html: emailHtml,
    });
  }
};
