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
    let lastFillup = Fillups.findOne({ owner: this.userId }, { "sort": [['miles', 'desc']] });
    let initMiles = myVehicle.miles;
    if(lastFillup){
      initMiles = lastFillup.miles;
    }
    let vin = myVehicle.vin;
    if (initMiles <= miles) {
      //mean data might be right..so insert
      return Fillups.insert({
        miles,
        gallons,
        price,
        vin,
        owner: this.userId,
        createdAt: new Date(),
      });
    } else {
      //current miles cannot be less than initial miles..please check
      console.log('Returning error as miles check failed');
      throw new Meteor.Error('Miles cannot be less than your top miles :',initMiles);
    }


  },
  'fillups.remove'() {
    return Fillups.remove({
      owner: this.userId,
    });
  },
});

// function getLatestMiles() {
//   let latestFillup = Fillups.findOne({ owner: this.userId }, { "sort": [['createdAt', 'desc']] });
//   let latestMiles;
//   console.log('getLatestMiles--', latestFillup);
//   if (null === latestFillup) {
//     //means get the last entered miles from vehicle registration collection
//     latestMiles = Vehicles.findOne({ owner: this.userId }).miles;

//   } else {
//     latestMiles = latestFillup.miles;
//   }
//   return latestMiles;
// }
