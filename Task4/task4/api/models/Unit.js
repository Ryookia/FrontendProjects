// api/models/Unit.js

module.exports = {
  attributes: {
      name: {type: 'string', minLength: 2, required: true},
      cost: {type: 'number', required: false, defaultsTo: 0},
      health: {type: 'number', required: true},
      damage: {type: 'number', required: false, defaultsTo: 0},
      type: {type: 'string', isIn: ['none', 'light', 'armored', 'heroic'], required: true},
  },
  datastore: 'default',
};
