const mongoose = require('mongoose');

const chatGroupManagementSchema = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        // ref: 'users'
    }],
    name: {
        type: String,
        default: null
    },
    mute_status: {
        type: String,
        enum: ['0', '1'],
        default: '0',
    },


}, { timestamps: true }
);

const chatGroupManagement = mongoose.model('chat_group_management', chatGroupManagementSchema);

module.exports = chatGroupManagement;