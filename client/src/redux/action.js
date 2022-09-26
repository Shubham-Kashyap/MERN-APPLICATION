import { post_api_call } from "../helpers/api_calls";

class action {
    /**
     * ------------------------------------------------------------------------
     * logged in user data 
     * ------------------------------------------------------------------------
     */
    _apiData = async (api_call) => {
        const data = await api_call;
        return data;
    }
    loggedInUserProfile = (state, action) => {
        if (action.payload) {
            const data = this._apiData(post_api_call('api/v1/fetch-profile', {}));
            return { ...state, loggedInUserData: data.response };
            // state.dataReducer.loggedInUserData = data.response;
        } else {
            state.loggedInUserData = null;
        }
    };
    /**
    * -------------------------------------------------------------------------
    * update show chat header status
    * -------------------------------------------------------------------------
    */
    updateShowChatBoxHeader = (state, action) => {
        if (action.payload) {
            return { ...state, showMessageHeader: action.payload }
        } else {
            return null;
        }
    };
    /**
    * -------------------------------------------------------------------------
    * update show message box status
    * -------------------------------------------------------------------------
    */
    updateShowMessageBox = (state, action) => {
        if (action.payload) {
            return { ...state, showMessageTextbox: action.payload }
        } else {
            return null;
        }
    };
    /**
    * ------------------------------------------------------------------------
    * set message box tab data 
    * ------------------------------------------------------------------------
    */
    setMessaageBoxTabData = (state, action) => {
        if (action.payload) {
            return state.updateShowMessageBox = 'hello'

        } else {
            return null;
        }
    };
}

export default new action();