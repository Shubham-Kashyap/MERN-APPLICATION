import { createReducer } from "@reduxjs/toolkit";
import action from "./action";

const initialState = {
    loggedInUserData: {},
    showMessageTextbox: false,
    showMessageHeader: false,
    setMessaageBoxTabData: {},
}


const dataReducer = createReducer(initialState, {
    updateLoggedInUserData: action.loggedInUserProfile, // get data of logged in user
    updateShowMessageBox: action.updateShowMessageBox, // set wheater or not to show chat message box  (specifically when user do not select anyone for chatting)
    updateShowMessageHeader: action.updateShowChatBoxHeader, // set chatbox header wheather or not to show (specifically when user do not select anyone for chatting)
    setMessaageBoxTabData: action.setMessaageBoxTabData,// set message box tab data 
});


export { dataReducer };