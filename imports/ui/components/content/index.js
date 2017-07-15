import './content.html';
import getUserIdentity from '/both/modules/get-user-identity';
import '../charts/';
import '../vehicles/';

Template.content.helpers({
    getScreenName(){
        return getUserIdentity(Meteor.user());
    }
});