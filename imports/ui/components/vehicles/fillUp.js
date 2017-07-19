
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Fillups } from '/imports/api/fillups/fillups';
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
        let miles = parseInt($('#fillup-miles').val());
        let gallons = parseInt($('#fillup-gallons').val());
        let price = parseInt($('#fillup-price').val());

        Meteor.call('fillups.insert', miles, gallons, price, (error) => {
            if (error) {
                $('.fillup-error').toggleClass('is-hidden');
                $('.fillup-error').text(error.error);
            } else {
                console.log('successful Insert');
                clearForm();
            }
        });

    },
    'click .btn-fillup-cancel'(event, template) {
        event.preventDefault();
        clearForm();
    }
});

function clearForm() {
    $('.fillup-error').toggleClass('is-hidden');
    $('#fillup-miles').val('');
    $('#fillup-gallons').val('');
    $('#fillup-price').val('');
    $('#fillup-form').css({ display: "none" });


}
