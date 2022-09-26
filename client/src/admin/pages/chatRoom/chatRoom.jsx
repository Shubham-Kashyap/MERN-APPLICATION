import './chatRoom.css';
import { useState, useEffect } from 'react';
import { io, Socket } from "socket.io-client";
import { post_api_call, ApiCall } from "../../../helpers/api_calls";
import PeopleList from './components/peoplelist';
import ChatHistory from './components/chatHistory';
import ChatHeader from './components/chatHeader';
import { enableMessaging } from './components/peoplelist';
import { useSelector, useDispatch } from "react-redux";

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
    const [chatMessage, setChatMessage] = useState({
        sender: '',
        receiver: "sdahgdvjhasbdjh",
        messageMIMEType: "", // for text , gif , emoji , file etc
        textMessage: "",
    });
    const [tab, setTab] = useState("");
    const [peopleList, setPeopleList] = useState([]);
    const [peopleGroup, setPeopleGroup] = useState([]);
    const [joined, setJoined] = useState(false);
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null)
    const [loggedInUserData, setLoggedInUserData] = useState({});
    const [messageHistory, setMessageHistory] = useState([]);
    const [Activechats, setActivechats] = useState([]);
    /**
     * ----------------------------------------------------------------
     * Custom functions
     * ----------------------------------------------------------------
     */

    async function getLoggedInUser() {
        const res = await ApiCall('/api/v1/fetch-profile');
        setLoggedInUserData(res.response);
    }
    async function getChatUsers() {
        const res = await post_api_call('/admin/v1/fetch-chat-users', {});
        setPeopleGroup(res.response);
    }
    console.log('chat room list ---', peopleList);

    /**
    * ----------------------------------------------------------------
    * send message click handler
    * ----------------------------------------------------------------
    */
    const handleKeyDown = (event) => {
        if (event.target.getAttribute('data-id') === 'send-button') {
            // console.log('++++++++ msg sent ++++++++');
            const uniqueEvent = `${loggedInUserData.username}`;
            socket.emit(`message`, {
                user: loggedInUserData._id,
                msg: document.getElementById('text-message').value,
                socketId: socket.id
            });
            // socket.emit('message', { message, id });
            document.getElementById("text-message").value = "";
        }

    };

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

        socket.on('connect', () => {
            setIsConnected(true);
            console.log('Client : socket is connected : ', socket.id)
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });
        socket.on(`msg-${loggedInUserData._id}`, (data) => {
            setMessageHistory(...messageHistory, {
                type: 'received',
                msg: data.message
            })
        })
        socket.on('pong', () => {
            setLastPong(new Date().toISOString());
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };


    }, [socket]);


    /** SCREEN COMPONENTS START */
    const _chatWidndowHeader = () => {
        return <ChatHeader />;
    }
    const _peopleList = () => {
        return <PeopleList />;
    }
    const _chatHistory = () => {
        return <ChatHistory />;
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




                                    {/* send message start  */}
                                    <div className="chat-message clearfix">
                                        <div className="input-group mb-0">
                                            <a className="input-group-prepend" onClick={handleKeyDown} style={{ cursor: " pointer " }}>

                                                <span className="input-group-text" data-id="send-button" ><i className="fa fa-send"></i></span>

                                            </a>
                                            <textarea type="text" className="form-control" id="text-message" data-id="send-text" placeholder="Enter your message here..." onKeyDown={handleKeyDown}></textarea>
                                        </div>
                                    </div>
                                    {/* send message end  */}

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