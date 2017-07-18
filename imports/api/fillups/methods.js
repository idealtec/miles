// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Fillups } from './fillups';
import { Vehicles } from '../vehicles/vehicles';


Meteor.methods({
  'fillups.insert'(miles, gallons, price) {
    check(price, Number);
    check(gallons, Number);
    check(miles, Number);
    let myVehicle = Vehicles.findOne({ owner: this.userId });
    let vin = myVehicle.vin;

    console.log('returning now');
    return Fillups.insert({
      miles,
      gallons,
      price,
      vin,
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
