const {Schema, model} = require('mongoose');

const HomeSchema = new Schema({
    fridgeFilter: {
        type: String,
        // changeCycle: every month
        rewardPoints: Number,
    },
    hvac:{
        type: String,
        rewardPoints: Number,
    },
    gutter: {
        type: String,
        type: String,
    },
    fireAlarm: {
        type: String,
        rewardPoints: Number,
    }

});

const Home = model ('Home', HomeSchema);

module.exports = Home;