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
        fetchData("Hello", "Template");
        return Fillups.find({});
        // let labelsArray = [];
        // let milesArray = [];
        // let priceArray = [];
        // let gallonsArray = [];
        // let objs = Fillups.find({}, { fields: { miles: 1, price: 1, gallons: 1 } }).fetch();

        // let i = 0;
        // _.each(objs, function (value, key, index) {
        //     _.each(value, function (value, key) {
        //         if (key === 'miles') {
        //             milesArray.push(value);
        //         }
        //         if (key === 'price') {
        //             priceArray.push(value);
        //         }
        //         if (key === 'gallons') {
        //             gallonsArray.push(value);
        //             i++;
        //             labelsArray.push('Fillup ' + i++);
        //         }
        //     });
        // });
        // let i = 0;
        // let objs = fetchData("Hello", "Template");
        // // console.log('Orai ',objs);
        // _.each(objs, function (value, key, index) {
        //     _.each(value, function (value, key) {
        //         if (key === 'mpg') {
        //             milesArray.push(value);
        //         }
        //         if (key === 'ppm') {
        //             priceArray.push(value);
        //         }

        //     });
        // });
        // Session.set('milesData', milesArray);
        // Session.set('gallonsData', gallonsArray);
        // Session.set('priceData', priceArray);
        // Session.set('labels', labelsArray);
        // for (var key in objs) {
        //     var obj = objs[key];
        //     console.log(key, obj);
        //     for (let mykey in obj) {
        //         console.log(mykey, obj[mykey]);
        //     }
        //     // ...
        // }



    },
    getDateTime(value) {
        // return monthDayYearAtTime(value, currentTimezone());
        return timeago(value);
    },
});

let fetchData = (filters, template) => {
    console.log('I will fetch data now');
    let labelsArray = [];
    let milesArray = [];
    let priceArray = [];
    let gallonsArray = [];
    Meteor.call('fillups.aggre', filters, (error, response) => {
        if (error) {
            console.log(error.reason);
        } else {
            console.log('else bey', response);
            let i = 0;
            _.each(response, function (value, key, index) {
                console.log('value', value);
                _.each(value, function (value, key) {
                    if (key === 'mpg') {
                        milesArray.push(value);
                    }
                    if (key === 'ppm') {
                        priceArray.push(value);
                    }
                    if (key === '_id') {
                        gallonsArray.push(value);
                        i++;
                        labelsArray.push('Fillup ' + i);
                    }

                });
            });

            Session.set('milesData', milesArray);
            Session.set('gallonsData', gallonsArray);
            Session.set('priceData', priceArray);
            Session.set('labels', labelsArray);

        }
    });
};