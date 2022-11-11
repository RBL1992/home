const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const UserProfileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
    // match: ?
  },
  referralLink: {
    type: String,
  },
  currentHomePoints: {
    type: Number,
    default: 0,
  },
  lifetimeHomePoints: {
    type: Number,
    default: 0,
  },
});

UserProfileSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

UserProfileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", UserProfileSchema);

module.exports = User;
