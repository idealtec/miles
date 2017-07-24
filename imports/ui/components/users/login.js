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
                            // Accounts.sendVerificationEmail(email);
                            Meteor.call('sendVerificationLink',(error,response)=>{
                    if(error){
                        console.log('Error in sending verification email',error.reason);
                    }else{
                        //success
                        console.log('Sent verification email');
                        
                    }
                });
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
                Meteor.call('sendVerificationLink',(error,response)=>{
                    if(error){
                        console.log('Error in sending verification email',error);
                    }else{
                        //success
                        console.log('Sent verification email');
                        
                    }
                });
            }
        });
    }
});