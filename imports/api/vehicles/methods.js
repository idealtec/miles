// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Vehicles } from './vehicles';


Meteor.methods({
  'vehicles.insert'(name, vin,miles) {
    check(name, String);
    check(vin, String);
    check(miles, Number);

    return Vehicles.insert({
      name,
      vin,
      miles,
      owner:this.userId,
      createdAt: new Date(),
    });
  },
});
