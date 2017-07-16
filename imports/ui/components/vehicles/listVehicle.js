import { Vehicles } from '/imports/api/vehicles/vehicles';
import { Meteor } from 'meteor/meteor';
import './listVehicle.html';

Template.listVehicle.onCreated(function () {
  console.log('list created');
  Meteor.subscribe('vehicles.all');
});

Template.listVehicle.helpers({
  vehicles() {
    return Vehicles.find({});
  },
  vehicleCount() {
    return Vehicles.find({}).count();
  }
});
Template.listVehicle.events({
  'click .btn-add-vehicle'(event, template) {
    event.preventDefault();
    Meteor.call('vehicles.insert', 'Benz', 'Dummy vin', 455, (error) => {
      if (error) {
        alert(error.error);
      } else {
        console.log('successful Insert');
      }
    });
  },
  'click .vehicle-deregister'(event, template) {
    event.preventDefault();
    Meteor.call('vehicles.remove', (error) => {
      if (error) {
        alert(error.error);
      } else {
        console.log('successful removal');
      }
    })
  }
});
