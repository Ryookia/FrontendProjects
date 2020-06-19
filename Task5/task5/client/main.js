import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Disasters } from '../imports/api/lists/lists.js';

import './main.html';

var sortAscending = new ReactiveVar(false);

Template.body.helpers({
  disasters: function() {
    // return Disasters.find();
    if (sortAscending.get()){
      return Disasters.find({}, {sort : { voteCount: 1}});
    } else {
    return Disasters.find({}, {sort : { voteCount: - 1}});
    }
  },

  sortAscending() {
    return Template.instance().sortAscending.get();
  }
});

Template.body.onCreated(function bodyOnCreated() {
  // counter starts at 0
  this.sortAscending = new ReactiveVar(false);
});

// Template.listEntry.helpers({
//
//   'click voteup'(event, instance){
//     instance.voteCount += 1;
//   },
//
//   'click votedown'(event, instance){
//     instance.voteCount -= 1;
//   },
//
//   'click delete'(event, instance){
//     Disasters.remove(instance.id);
//   }
// });

Template.addEntry.events({
  'submit form': function(event) {
    event.preventDefault();

    var newDisaster = {
      name: event.target.name.value,
      voteCount: 0
    };

    Disasters.insert(newDisaster);
  }
});

Template.disasterEntry.events({
  'click .voteup': function(event) {
    event.preventDefault();
    var id = $(event.currentTarget).parent('.disasterEntry').data('id');
    disaster = Disasters.findOne( {_id: id } );
    Disasters.update( id, {
      $set: {
        voteCount: disaster.voteCount + 1,
      }
    });
  },

  'click .votedown': function(event) {
    event.preventDefault();
    var id = $(event.currentTarget).parent('.disasterEntry').data('id');
    disaster = Disasters.findOne( {_id: id } );
    Disasters.update( id, {
      $set: {
        voteCount: disaster.voteCount - 1,
      }
    });
  },

  'click .delete': function(event) {
    event.preventDefault();
    var id = $(event.currentTarget).parent('.disasterEntry').data('id');
    Disasters.remove(id);
  },
});

Template.sortingPanel.events({
  'click button'(event, instance){
    sortAscending.set(!sortAscending.get());
  },
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
