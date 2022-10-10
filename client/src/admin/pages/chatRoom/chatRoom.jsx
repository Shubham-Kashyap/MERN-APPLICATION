import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { post_api_call } from "../../../helpers/api_calls";
import './chatRoom.css';
import ChatHeader from './components/chatHeader';
import ChatHistory from './components/chatHistory';
import PeopleList from './components/peoplelist';
import SendMessage from './components/sendMessage';

const URL = "http://localhost:4000";
const socket = io(URL, {
    // autoConnect: false,
    transports: ['websocket']
});

const ChatRoom = (props) => {
    /**
     * ----------------------------------------------------------------
     * State Variables 
     * ----------------------------------------------------------------
     */
    const res = useSelector(state => state.chatReducer.currentChat)
    const [peopleGroup, setPeopleGroup] = useState([]);
    const [loggedInUserData, setLoggedInUserData] = useState({});

    /**
     * ----------------------------------------------------------------
     * Custom functions
     * ----------------------------------------------------------------
     */

    async function getLoggedInUser() {
        const res = await post_api_call('/api/v1/fetch-profile');
        setLoggedInUserData(res.response);
    }
    async function getChatUsers() {
        const res = await post_api_call('/admin/v1/fetch-chat-users', {});
        setPeopleGroup(res.response);
    }
    // console.log('chat room list ---', peopleList);

    /**
     * ----------------------------------------------------------------------
     * chat functions
     * ----------------------------------------------------------------------
     */
    const sendPing = () => {
        socket.emit('ping');
    };
    /**
     * ----------------------------------------------------------------------
     * On screen load 
     * ----------------------------------------------------------------------
     */
    useEffect(async () => {
        getLoggedInUser();
        getChatUsers();

    }, [res]);


    /** SCREEN COMPONENTS START */
    const _chatWidndowHeader = () => {
        return <ChatHeader tab={res} />;
    }
    const _peopleList = () => {
        return <PeopleList />;
    }
    const _chatHistory = () => {
        return <ChatHistory tab={res} />;
    }
    const _sendMessagebox = () => {
        return <SendMessage tab={res} />
    }
    /** SCREEN COMPONENTS END */

    return (
        <>
            <div id="content" className="content content-full-width">
                <link href={"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"} rel="stylesheet" />

                <div className="container-fluid" style={{ height: "100%", marginTop: "10px" }}>
                    <div className="row clearfix">
                        <div className="col-lg-12 mb-0" style={{ height: '100%' }}>
                            <div className="card chat-app">

                                {/* people list start */}
                                {_peopleList()}
                                {/* people list end  */}

                                {/* chat window begin */}
                                <div className="chat" id="chatbox-window" >



                                    <div >

                                        {/* chat window header start */}
                                        {_chatWidndowHeader()}
                                        {/* chat window header end  */}


                                        {/* chat history start */}
                                        {_chatHistory()}
                                        {/* chat hitory end  */}
                                    </div>


                                    <div>
                                        {/* send message text box start  */}
                                        {_sendMessagebox()}
                                        {/* send message text box end  */}
                                    </div>


                                </div>



                                {/* chat window end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatRoom;