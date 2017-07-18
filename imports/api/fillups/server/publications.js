// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Fillups } from '../fillups';

Meteor.publish('fillups.all', function () {
  return Fillups.find({owner:this.userId});
});
