// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Vehicles } from '../vehicles';

Meteor.publish('vehicles.all', function () {
  return Vehicles.find({owner:this.userId});
});

  Meteor.publish( 'user', function() {
  return Meteor.users.find( this.userId, {
    fields: {
      "services.facebook.email": 1,
      "services.github.email": 1,
      "services.google.email": 1,
      "services.twitter.screenName": 1,
      "emails": 1,
      "profile": 1
    }
  });
});