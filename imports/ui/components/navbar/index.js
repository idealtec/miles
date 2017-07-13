import './navbar.html';

Template.navbar.events({
    'click .navbar-burger': function (e, t) {
        t.$('.navbar-menu').toggleClass("is-active")
    },
    'click [data-social-login]'(event, template) {
        event.preventDefault();
        const service = event.target.getAttribute('data-social-login'),
            options = {
                requestPermissions: ['email']
            };
        console.log('EEEE', service);
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