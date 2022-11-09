const {Schema, model} = require('mongoose');
const filterSchema = require('./Filter');

const homeSchema = new Schema({
  filter: [filterSchema],

  userid: {
      type: Schema.Types.ObjectId,
      ref: "User",
  },
});

const HomeAssistant = model ('HomeAssistant', homeSchema);

module.exports = HomeAssistant;
