import { Vehicles } from '/imports/api/vehicles/vehicles';
import { Meteor } from 'meteor/meteor';
import {Template} from 'meteor/templating';
import './addVehicle.html';
import './listVehicle';
import './registerVehicle';
import './listFillups';
import '../charts';

Template.addVehicle.onCreated(function () {
  Meteor.subscribe('vehicles.all');
});

Template.addVehicle.helpers({
  vehicles() {
    return Vehicles.find({});
  },
vehicleCount(){
    return Vehicles.find({}).count();
}
});
Template.addVehicle.events({
    'click .btn-add-vehicle'(event,template){
        event.preventDefault();
        console.log('Here');
        $('#register-vehicle-modal').css({ display: "block" });

    }
});
