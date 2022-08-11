// const { mongoose, chalk } = require('../exports/library');
const mongoose = require('mongoose');


// console.log(mongoose)




const user_schema = new mongoose.Schema({
    name: {
        type: String,
        default: null,
    },
    username: {
        type: String,
        default: null,
    },
    country_code: {
        type: Number,
        default: null,
    },
    phone_no: {
        type: Number,
        default: null,
    },
    email: {
        type: String,
        default: null,
    },
    password: {
        type: String,
        // required: true,
    },
    role: {
        type: String,
        default: null
    },
    avatar: {
        type: String,
        default: "https://bootdey.com/img/Content/avatar/avatar5.png" // default avatar image
    },
    device_type: {
        type: String,
        default: null
    },
    device_token: {
        type: String,
        default: null
    },

}, { timestamps: true }
);

const User = mongoose.model('users', user_schema);

module.exports = User;