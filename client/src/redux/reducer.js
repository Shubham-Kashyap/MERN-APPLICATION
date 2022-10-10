import { createReducer } from "@reduxjs/toolkit";
import { ApiCall } from "../helpers/api_calls";
import action from "./action";

const authInitialState = {
    loggedInUser: null,
}

const chatInitialState = {
    currentChat: null,
}

const dataReducer = createReducer(authInitialState, {
    // updateLoggedInUserData: action.loggedInUserProfile,
    // updateShowMessageBox: action.updateShowMessageBox, // set wheater or not to show chat message box  (specifically when user do not select anyone for chatting)
    // updateShowMessageHeader: action.updateShowChatBoxHeader, // set chatbox header wheather or not to show (specifically when user do not select anyone for chatting)
    // setMessaageBoxTabData: action.setMessaageBoxTabData,// set message box tab data 

    setLoggedInUserData: action.loggedInUserProfile,

});

const chatReducer = createReducer(chatInitialState, {
    setCurrentChat: action.setCurrentChat
})


export { dataReducer, chatReducer };