const mongoose = require('mongoose');

const personalAccessTokenSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    personal_access_token: {
        type: String,
        default: null
    },
    otp: {
        type: String,
        default: null
    },
    remember_token: {
        type: String,
        default: null
    }
}, { timestamps: true });

const personalAccessToken = mongoose.model('personal_access_tokens', personalAccessTokenSchema);

module.exports = personalAccessToken;