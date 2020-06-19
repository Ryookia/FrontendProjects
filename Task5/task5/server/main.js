import { Meteor } from 'meteor/meteor';
import { Disasters } from '../imports/api/lists/lists.js';

Meteor.startup(() => {
  if (Disasters.find().count() == 0){
    var testData = [{
      name: "Covid",
      voteCount: 30
    },{
      name: "Cyberpunk delayed",
      voteCount: 10}];

    testData.forEach(function(disaster) {
      Disasters.insert(disaster);
    });

    // _.each(testData, function(disaster) {
    //   Disasters.insert(disaster);
    // });
  }
});
