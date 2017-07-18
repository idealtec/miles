import { Vehicles } from '/imports/api/vehicles/vehicles';
import { Fillups } from '/imports/api/fillups/fillups';
import { Meteor } from 'meteor/meteor';
import './listVehicle.html';
import './fillUp';

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
  },
  fillups() {
        return Fillups.find({});
    },
});
Template.listVehicle.events({
  'click .btn-add-vehicle'(event, template) {
    event.preventDefault();

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
  },
  'click .fillup-add'(event, template) {
    event.preventDefault();
    console.log('Here Man');
    //Show modal
    $('#fillup-form').css({ display: "block" });



    // Meteor.call('vehicles.remove', (error) => {
    //   if (error) {
    //     alert(error.error);
    //   } else {
    //     console.log('successful removal');
    //   }
    // })
  }
});
