const {Schema, model} = require('mongoose');
const filterSchema = require('./Filter');
const hvacSchema = require('./Hvac');
const gutterSchema = require('./Gutter');
const alarmSchema = require('./Alarm');
const doorbellSchema = require('./Doorbell');
const outletsSchema = require('./Outlets');
const ceilingFanSchema = require('./CeilingFans');
const exhaustFanSchema = require('./ExhaustFan');
const regroutSchema = require('./Regrout');
const downspoutSchema = require('./Downspouts');
const drainsSchema = require('./Drains');
const waterHeaterSchema = require('./WaterHeater');
const sumpPumpSchema = require('./SumpPump');
const roofSchema = require('./Roof');
const foundationSchema = require('./Foundation');
const sidingSchema = require('./Siding');
const paintSchema = require('./Paint');
const exteriorSurfaceCracksSchema = require('./ExteriorSurfaceCracks');
const airConditioningUnitSchema = require('./AirConditioningUnit');
const crittersSchema = require('./Critters');
const trimmingSchema = require('./Trimming');
const hvacUnitSchema = require('./HVACUnit');
const disposalSchema = require('./Disposal');
const coilsSchema = require('./Coils');
const washingMachineSchema = require('./WashingMachine');
const fireExtinguisherSchema = require('./FireExtinguisher');
const dryerVentSchema = require('./DryerVent');
const sealsSchema = require('./Seals');

const homeSchema = new Schema({
  hvac: [hvacSchema],
  alarm: [alarmSchema],
  gutter: [gutterSchema],
  filter: [filterSchema],
  doorbell: [doorbellSchema],
  outlet: [outletsSchema],
  ceilingfan: [ceilingFanSchema],
  exhaustfan: [exhaustFanSchema],
  regrout: [regroutSchema],
  downspout: [downspoutSchema],
  drains: [drainsSchema],
  waterheater: [waterHeaterSchema],
  sumppump: [sumpPumpSchema],
  roof: [roofSchema],
  foundation: [foundationSchema],
  siding: [sidingSchema],
  paint: [paintSchema],
  exteriorsurfacecracks: [exteriorSurfaceCracksSchema],
  airconditioningunit: [airConditioningUnitSchema],
  critter: [crittersSchema],
  trimming: [trimmingSchema],
  hvacunit: [hvacUnitSchema],
  disposal: [disposalSchema],
  coils: [coilsSchema],
  washingmachine: [washingMachineSchema],
  fireextinguisher: [fireExtinguisherSchema],
  dryervent: [dryerVentSchema],
  seals: [sealsSchema],

  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  homeName: {
    type: String,
    required: true,
    trim: true,
  },
});

const HomeAssistant = model('HomeAssistant', homeSchema);

module.exports = HomeAssistant;
