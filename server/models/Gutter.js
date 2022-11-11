const { Schema, model } = require("mongoose");

const gutterSchema = new Schema({
  brandName: {
    type: String,
  },
  room: {
    type: String,
    required: true,
  },
  lastMaintenanceDate: {
    type: Date,
    required: true,
  },
  itemCategory: {
    type: String,
    required: true,
  },
});

module.exports = gutterSchema;
