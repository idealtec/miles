
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Fillups } from '/imports/api/fillups/fillups';
import './fillUp.html';
import { Session  } from 'meteor/session';

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
        updateSession();

    },
    'click .btn-fillup-cancel'(event, template) {
        event.preventDefault();
        clearForm();
    }
});
function updateSession() {
    console.log('Updating Session');
    let fillups = Fillups.find({});
    let milesData = [];
    let priceData = [];
    fillups.forEach(function (element) {
        milesData.push(element.miles)
        priceData.push(element.gallons)
    });

    console.log('miles', milesData);
    Session .set('milesData', milesData);
    Session .set('priceData', priceData);
}

function clearForm() {
    $('.fillup-error').toggleClass('is-hidden');
    $('.fillup-error').text('');
    $('#fillup-miles').val('');
    $('#fillup-gallons').val('');
    $('#fillup-price').val('');
    $('#fillup-form').css({ display: "none" });


}
