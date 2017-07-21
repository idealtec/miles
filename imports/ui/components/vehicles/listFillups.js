import './listFillups.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Fillups } from '/imports/api/fillups/fillups';
import { Session } from 'meteor/session';
import './fillUp.html';
import {
    currentTimezone,
    hoursMinutes,
    timeago,
    localize,
    monthDayYear,
    monthDayYearAtTime,
    epochToISOString,
    daysInFuture,
    daysInPast,
    hasPassed,
} from '/imports/modules/dates';

Template.listFillups.onCreated(function () {
    Meteor.subscribe('fillups.all');
});

Template.listFillups.helpers({
    fillups() {
        let objs = Fillups.find({}, { fields: { miles: 1, price: 1, gallons: 1 } }).fetch();
        let labelsArray = [];
        let milesArray = [];
        let priceArray = [];
        let gallonsArray = [];

        let i = 0;
        _.each(objs, function (value, key, index) {
            _.each(value, function (value, key) {
                if (key === 'miles') {
                    milesArray.push(value);
                }
                if (key === 'price') {
                    priceArray.push(value);
                }
                if (key === 'gallons') {
                    gallonsArray.push(value);
                    i++;
                    labelsArray.push('Fillup ' + i++);
                }
            });
        });
        Session.set('milesData', milesArray);
        Session.set('gallonsData', gallonsArray);
        Session.set('priceData', priceArray);
        Session.set('labels', labelsArray);
        // for (var key in objs) {
        //     var obj = objs[key];
        //     console.log(key, obj);
        //     for (let mykey in obj) {
        //         console.log(mykey, obj[mykey]);
        //     }
        //     // ...
        // }


        return Fillups.find({});
    },
    getDateTime(value) {
        // return monthDayYearAtTime(value, currentTimezone());
        return timeago(value);
    },
});