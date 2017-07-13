// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';

Meteor.publish('links.all', function () {
  return Links.find();
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
