import { Accounts } from 'meteor/accounts-base';

Accounts.emailTemplates.siteName = "ITS-Miles";
Accounts.emailTemplates.from = "ITS-Miles <admin@idealtechnosoft.com>";

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return "[GoDunk] Verify Your Email Address";
  },
  text(user, url) {
    let emailAddress = user.emails[0].address,
      urlWithoutHash = url.replace('#/', ''),
      supportEmail = "support@idealtechnosoft.com",
      emailBody = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
};
Accounts.emailTemplates.sendResetPasswordEmail = {
  subject() {
    return "[GoDunk] Verify Your Email Address";
  },
  text(user, url) {
    let emailAddress = user.emails[0].address,
      urlWithoutHash = url.replace('#/', ''),
      supportEmail = "support@idealtechnosoft.com",
      emailBody = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
};
Accounts.emailTemplates.sendEnrollmentEmail = {
  subject() {
    return "[ITS] Welcome to Miles";
  },
  text(user, url) {
    let emailAddress = user.emails[0].address,
      urlWithoutHash = url.replace('#/', ''),
      supportEmail = "support@idealtechnosoft.com",
      emailBody = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
};
