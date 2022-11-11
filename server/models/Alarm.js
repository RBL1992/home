const { Schema, model } = require("mongoose");

const alarmSchema = new Schema({
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

module.exports = alarmSchema;
