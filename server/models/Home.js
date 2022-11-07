const {Schema, model} = require('mogoose');

const HomeSchema = new Schema({
    filter: {
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