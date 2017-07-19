import './listFillups.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Fillups } from '/imports/api/fillups/fillups';
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
        return Fillups.find({});
    },
    getDateTime(value) {
        // return monthDayYearAtTime(value, currentTimezone());
        return timeago(value);
    },
});