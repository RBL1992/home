const { Schema } = require('mongoose');

const fileSchema = new Schema({
  filename: {
    type: String,
    required: true,
  },
  encoding: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
});

module.exports = fileSchema;
