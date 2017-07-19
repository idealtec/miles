import './login.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import {Accounts} from 'meteor/accounts-base';

Template.login.onRendered({

});

Template.login.helpers({

});

Template.login.events({
    'click .btn-login'(event, template) {
        console.log('Login');
        let email = $('#login-email').val();
        let password = $('#login-password').val();
        Meteor.loginWithPassword(email, password, (error) => {
            if (error) {
                console.log(error.reason);
            } else {
                console.log('success');
            }
        });
    },
    'click .btn-signup'(event, template) {
        console.log('Signup');
        let email = $('#login-email').val();
        let password = $('#login-password').val();
        Accounts.createUser({
            email: email,
            password: password
        }, (error) => {
            if (error) {
                console.log(error.reason);
            } else {
                console.log('success');
            }
        });
    }
});