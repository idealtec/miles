import './content.html';
import getUserIdentity from '/both/modules/get-user-identity';

Template.content.helpers({
    getScreenName(){
        return getUserIdentity(Meteor.user());
    }
});