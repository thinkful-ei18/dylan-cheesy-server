'use strict';

const mongoose = require('mongoose');

const cheeseSchema = mongoose.Schema({
  name: { type: String, required: true}
});

cheeseSchema.set('toObject', {
  transform: function(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

const Cheese = mongoose.model('Cheese', cheeseSchema);
module.exports = { Cheese };