const {Schema, model} = require("mongoose");
const dayjs = require('dayjs');
var AdvancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(AdvancedFormat); 

const filterSchema = new Schema({
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
    get: (time) => dayjs(time).format("MMM Do, YYYY")
  },
  itemCategory: {
    type: String,
    required: true,
  },
});

module.exports = filterSchema;
