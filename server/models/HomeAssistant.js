const {Schema, model} = require('mongoose');
const filterSchema = require('./Filter');
const hvacSchema = require('./Hvac');
const gutterSchema = require('./Gutter');
const alarmSchema = require('./Alarm');

const homeSchema = new Schema({
  hvac: [hvacSchema],
  alarm: [alarmSchema],
  gutter: [gutterSchema],
  filter: [filterSchema],

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  homeName: {
    type: String,
    required: true
  }
});

const HomeAssistant = model('HomeAssistant', homeSchema);

module.exports = HomeAssistant;
