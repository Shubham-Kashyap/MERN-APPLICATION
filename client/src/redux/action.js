import { post_api_call } from "../helpers/api_calls";

class action {
    /**
     * ------------------------------------------------------------------------
     * api data call
     * ------------------------------------------------------------------------
     */
    _apiData = async (api_call) => {
        const data = await api_call;
        return data;
    }
    /**
     * ------------------------------------------------------------------------
     * logged in user data 
     * ------------------------------------------------------------------------
     */
    loggedInUserProfile = (state, action) => {
        console.log('current logged in user --');
        state.loggedInUser = action.payload
    };

    /**
    * ------------------------------------------------------------------------
    * set current chat 
    * ------------------------------------------------------------------------
    */
    setCurrentChat = (state, action) => {
        console.log('updated current tab data -- ')
        state.currentChat = action.payload
    };
}

export default new action();