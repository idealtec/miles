import './login.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

Template.login.onRendered({

});

Template.login.helpers({

});

Template.login.events({
    'click .btn-login'(event, template) {
        let email = $('#login-email').val();
        let password = $('#login-password').val();
        if (email != '' || password != '') {
            Meteor.loginWithPassword(email, password, (error) => {
                if (error) {
                    console.log(error.reason);
                } else {
                    // Accounts.sendVerificationEmail(email);
                    Meteor.call('sendWelcomeEmail', email, (error, response) => {
                        if (error) {
                            console.log('Error in sending verification email', error.reason);
                        } else {
                            //success
                            console.log('Sent verification email');

                        }
                    });
                }
            });
        }
        else {
        }
    },
    'click .btn-signup'(event, template) {
        let email = $('#login-email').val();
        let password = $('#login-password').val();
        if (email != '' || password != '') {
            Accounts.createUser({
                email: email,
                password: password
            }, (error) => {
                if (error) {
                    console.log(error.reason);
                } else {
                    Meteor.call('sendVerificationLink', (error, response) => {
                        if (error) {
                            console.log('Error in sending verification email', error);
                        } else {
                            //success
                            console.log('Sent verification email');

                        }
                    });
                }
            });
        }
    }
});