const {Schema, model} = require('mongoose');
const filterSchema = require('./Filter');
const hvacSchema = require('./Hvac');
const gutterSchema = require('./Gutter');
const alarmSchema = require('./Alarm');
const doorbellSchema = require('./Doorbell');
const outletsSchema = require('./Outlets');
const ceilingFanSchema = require('./CeilingFans');
const exhaustFanSchema = require('./ExhaustFan');

const homeSchema = new Schema({
  hvac: [hvacSchema],
  alarm: [alarmSchema],
  gutter: [gutterSchema],
  filter: [filterSchema],
  doorbell: [doorbellSchema],
  outlet: [outletsSchema],
  ceilingfan: [ceilingFanSchema],
  exhaustfan: [exhaustFanSchema],

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  homeName: {
    type: String,
    required: true,
    trim: true
  }
});

const HomeAssistant = model('HomeAssistant', homeSchema);

module.exports = HomeAssistant;
