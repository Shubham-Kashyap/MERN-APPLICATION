import React from 'react';
import { io, Socket } from "socket.io-client";
const socket = io(URL, {
    // autoConnect: false,
    transports: ['websocket']
});

const chat = () => {
    const sendMessage = () => {

    }
    const chatHistory = (userId) => {

    }
    return {

    }
}

export default chat
