import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Email } from 'meteor/email';
import { SSR } from 'meteor/meteorhacks:ssr';
import { check } from 'meteor/check';


Meteor.methods({
  sendVerificationLink() {
    let userId = Meteor.userId();
    if (userId) {
      return Accounts.sendVerificationEmail(userId);
    }
  },
  sendMessage(email) {
    // check(message, Object);

    // Email.send({
    //   to: 'The Meteor Chef <business@themeteorchef.com>',
    //   from: `${message.name} ${message.email}`,
    //   subject: `${message.name} sent a message!`,
    //   text: message.message,
    // });
    SSR.compileTemplate('htmlEmail', Assets.getText('html-email.html'));

    var emailData = {
      name: email,
      favoriteRestaurant: "Honker Burger",
      bestFriend: "Skeeter Valentine",
    };

    Email.send({
      to: "yeshu501@gmail.com",
      from: "admin@idealtechnosoft.com",
      subject: "Welcome to ITS",
      html: SSR.render('htmlEmail', emailData),
      attachments: [{
        filename: 'flapjacks.pdf',
        filepath: 'https://s3.amazonaws.com/tmc-post-content/flapjacks.pdf',
        contentType: 'pdf',
      }],
    });

  },
  sendWelcomeEmail(email) {
    // check(message, Object);
    Meteor.defer(() => {
      SSR.compileTemplate('welcomeEmail', Assets.getText('welcome-email.html'));

      var emailData = {
        name: email,
        favoriteRestaurant: "Honker Burger",
        bestFriend: "Skeeter Valentine",
      };

      Email.send({
        to: email,
        from: "admin@idealtechnosoft.com",
        subject: "Welcome to ITS-Miles",
        html: SSR.render('welcomeEmail', emailData),
        // attachments: [{
        //   filename: 'flapjacks.pdf',
        //   filepath: 'https://s3.amazonaws.com/tmc-post-content/flapjacks.pdf',
        //   contentType: 'pdf',
        // }],
      });

    });
  },
});


