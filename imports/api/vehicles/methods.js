// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Vehicles } from './vehicles';
import {Fillups} from '../fillups/fillups';


Meteor.methods({
  'vehicles.insert'(name, vin, miles) {
    if (validate(name, vin, miles)) {

      return Vehicles.insert({
        name,
        vin,
        miles,
        owner: this.userId,
        createdAt: new Date(),
      });
    } else {
      throw new Meteor.Error('Please pass valid arguments');
    }

  },
  'vehicles.remove'() {
    Fillups.remove({owner: this.userId});
    return Vehicles.remove({
      owner: this.userId,
    });
  },
});
function validate(name, vin, miles) {
  let isValid = false;
  isValid = Match.test(name, String);
  isValid = Match.test(vin, String);
  isValid = Match.test(miles, Number);
  return isValid;
}
