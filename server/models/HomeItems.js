const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat.js');

const homeItemSchema = new Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemImg: {

    },
    itemDescription: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100,
        trim: true,
    },
    capturedAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 150,
            },
        },
    ],

});

const HomeItems = model('HomeItems', homeItemSchema);

module.exports = HomeItems;