// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Fillups } from '../fillups';

Meteor.publish('fillups.all', function () {
  return Fillups.find({ owner: this.userId }, { sort: { createdAt: 1 }, limit: 15 });
});
// Meteor.publish('fillups.all', function () {
//   return
//   var aggre = Fillups.aggregate({
//     $match: { owner: this.userId },
//     $group: { _id: '$_id', miles: '$miles', gallons: '$gallons',price:'$price',vin:'$vin', total: { $divide: ['$price', '$gallons'] } }
//   });
//   console.log(aggre);
//   return aggre;

// });
