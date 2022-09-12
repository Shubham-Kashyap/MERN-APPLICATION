module.exports = {
    chalk: require('chalk'),
    mongoose: require('mongoose'),
    dotenv: require('dotenv'),
    expressValidator: require('express-validator'),
    bcrypt: require('bcrypt'),
    jwt: require('jsonwebtoken'),

    /** @models */
    user: require('../models/user'),
    personalAccessToken: require('../models/personalAccessToken'),
    group: require('../models/group'),
    chat: require('../models/chat')


};