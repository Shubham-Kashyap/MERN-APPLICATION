const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        content: {
            type: String,
            trim: true,
        },
        chat_group: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chat',
        },
    },
    {
        timestamps: true,
    }
);


const chat = mongoose.model('chats', chatSchema);

module.exports = chat;