
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './fillUp.html';

Template.fillUp.onCreated(function () {
    Meteor.subscribe('fillups.all');
});

Template.fillUp.helpers({
    fillups() {
        return Fillups.find({});
    },
});
Template.fillUp.events({
    'click .btn-add-fillup'(event, template) {
        event.preventDefault();

        Meteor.call('fillups.insert', miles, gallons, price, (error) => {
            if (error) {
                alert(error.error);
            } else {
                console.log('successful Insert');
                // clearForm();
            }
        });

    }
});
