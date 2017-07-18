import './listFillups.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import {Fillups} from '/imports/api/fillups/fillups';
import './fillUp.html';

Template.listFillups.onCreated(function () {
    Meteor.subscribe('fillups.all');
});

Template.listFillups.helpers({
    fillups() {
        return Fillups.find({});
    },
});