const {Schema, model} = require('mogoose');
const bcrypt = require('bcrypt');

const UserProfileSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    phoneNumber: {
        type: String,
        required: false,
        // match: ?
    },
});

UserProfileSchema.pre('save', async function (next){
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrpyt.hash(this.password, saltRounds);
    }
    next();
});

UserProfileSchema.methods.isCorrectPassword = async function (password) {
    return bcrpyt.compare(password, this.password);
};

const User = model ('User', UserProfileSchema);

module.exports = User;

