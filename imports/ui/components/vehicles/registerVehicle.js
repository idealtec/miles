import { Vehicles } from '/imports/api/vehicles/vehicles';
import { Meteor } from 'meteor/meteor';
import './registerVehicle.html';

Template.registerVehicle.onCreated(function () {
  Meteor.subscribe('vehicles.all');
});

Template.registerVehicle.helpers({
  vehicles() {
    return Vehicles.find({});
  },

});
Template.registerVehicle.events({
    'click .btn-vehicle-register'(event,template){
        event.preventDefault();
        let nickname=$('#vehicle-name').val();
        let vin=$('#vehicle-vin').val();
        let miles=parseInt($('#vehicle-miles').val());
        console.log(' I will add now');
        Meteor.call('vehicles.insert', nickname,vin,miles, (error) => {
      if (error) {
        alert(error.error);
      } else {
        console.log('successful Insert');
      }
    });
    }
});