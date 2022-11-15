const db = require('../config/connection');
const {Rewards} = require('../models');

const rewardsData = require('./rewardsData.json');

db.once('open', async () => {
    await Rewards.deleteMany({});

    const rewards = await Rewards.insertMany(rewardsData);

    process.exit(0);
});
