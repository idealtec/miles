import './navbar.html';
import '../charts';

Template.navbar.events({
    'click .navbar-burger': function (event, template) {
        template.$('.navbar-menu').toggleClass("is-active")
    },
       'click .charts': function (event, template) {
           console.log('Click');
        $( "#myChart" ).toggleClass( 'is-hidden' );

    },
    'click [data-social-login]'(event, template) {
        event.preventDefault();
        const service = event.target.getAttribute('data-social-login'),
            options = {
                requestPermissions: ['email']
            };
        if (service === 'loginWithTwitter') {
            delete options.requestPermissions;
        }

        // Meteor.loginWithTwitter({});
        Meteor[service](options, (error) => {
            if (error) {
                console.log(error.message);
            }
        });
    },
    "click [action='logout']"(event, template) {
        event.preventDefault();
        Meteor.logout();
    },
});