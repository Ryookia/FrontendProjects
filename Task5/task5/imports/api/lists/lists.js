import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';

export const Disasters = new Mongo.Collection('disasters');

// Disasters.schema = new SimpleSchema({
//   name: {type: String},
//   voteCount: {type: Number, defaultValue: 0}
// });
