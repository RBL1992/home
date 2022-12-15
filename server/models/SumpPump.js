const { Schema, model } = require('mongoose');
const dayjs = require('dayjs');
var AdvancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(AdvancedFormat);

const sumpPumpSchema = new Schema(
  {
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
      get: (time) => dayjs(time).format('MM/DD/YYYY'),
    },
    itemCategory: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `nextMaintenanceDate` that gets date the thing needs to be maintained
sumpPumpSchema.virtual('nextMaintenanceDate').get(function () {
  return dayjs(this.lastMaintenanceDate).add(180, 'day').format('MM/DD/YYYY');
});

module.exports = sumpPumpSchema;
