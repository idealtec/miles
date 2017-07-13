// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
 import {Accounts} from 'meteor/accounts-base';
import { Links } from '../../api/links/links.js';
import {ServiceConfiguration} from 'meteor/service-configuration';
import {HTTP} from 'meteor/http';
import configure from '/server/configure-services';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }
  configure();
});
