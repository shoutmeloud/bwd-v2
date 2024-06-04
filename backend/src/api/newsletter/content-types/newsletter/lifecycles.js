'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const email = result.email;

    const emailTemplatePath = path.join(__dirname, '../../templates/admin-notification.html');
    let emailHtml = fs.readFileSync(emailTemplatePath, 'utf8');
    emailHtml = emailHtml.replace('{{email}}', email);

    await strapi.plugin('email').service('email').send({
      to: 'souvik.dev@reddensoft.com',
      from: 'admin@reddensoft.com',
      subject: 'New Newsletter Subscription',
      text: `A new user has subscribed to the newsletter with the email: ${email}\n\nRegards,\nYour Company`,
      html: emailHtml,
    });
  }
};
