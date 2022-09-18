import React from 'react';
import { post_api_call } from '../helpers/api_calls';
import { io, Socket } from "socket.io-client";
const socket = io(URL, {
    // autoConnect: false,
    transports: ['websocket']
});

const chat = () => {
    const { user, selectedChat } = chatState();
    const sendMessage = () => {

    }
    const getChatHistory = (userId) => {
        const res = await post_api_call('/admin/v1/fetch-chat-users', {});
        return res;
    }


    return {
        getChatHistory
    }
}

export default chat
