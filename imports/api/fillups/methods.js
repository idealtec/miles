// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Fillups } from './fillups';


Meteor.methods({
  'fillups.insert'( miles,gallons,price) {
    check(price, Number);
    check(gallons, String);
    check(miles, Number);

    return Fillups.insert({
      miles,
      gallons,
      price,
      owner: this.userId,
      createdAt: new Date(),
    });
  },
  'fillups.remove'() {
    return Fillups.remove({
      owner: this.userId,
    });
  },
});
