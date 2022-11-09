const {Schema, model} = require('mongoose');
const filterSchema = require('./Filter');

const homeSchema = new Schema({
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

const HomeAssistant = model ('HomeAssistant', homeSchema);

module.exports = HomeAssistant;
