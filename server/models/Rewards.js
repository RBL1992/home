const { Schema, model } = require("mongoose");

const rewardSchema = new Schema({
    rewardDescription :{
        type: String,
        required: true,
    },
    homePointsCost: {
        type: Number,
        required: true,
    },
});

const Rewards = model("Rewards", rewardSchema);

module.exports = Rewards;
