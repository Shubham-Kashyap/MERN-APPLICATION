import './chatRoom.css';
import { useState, useEffect } from 'react';
import { io, Socket } from "socket.io-client";
import { post_api_call, ApiCall } from "../../../helpers/api_calls";

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

    /**
     * ----------------------------------------------------------------
     * Custom functions
     * ----------------------------------------------------------------
     */

    async function getLoggedInUser() {
        const res = await ApiCall('/api/v1/fetch-profile');
        setLoggedInUserData(res.response);
    }
    async function getChatGroups() {
        const res = await post_api_call('/admin/v1/fetch-user-to-group', {});
        if (res.response.length > 0) {
            setTab(res.response[0]);

        }
        setPeopleGroup(res.response);
    }
    /**
    * ----------------------------------------------------------------
    * send message click handler
    * ----------------------------------------------------------------
    */
    const handleKeyDown = (event) => {


        if (event.key === 'Enter' || event.target.getAttribute('data-id') === 'send-button') {
            console.log('++++++++ msg sent ++++++++');
            const uniqueEvent = `${loggedInUserData.username}`;
            socket.emit(`message`, {
                sender: loggedInUserData._id,
                senderName: loggedInUserData.name,

                senderRole: loggedInUserData.role,
                receiver: tab._id,
                receiverType: tab.role ? 'individual' : 'group',
                message: document.getElementById("text-message").value
            });
            // socket.emit('message', { message, id });
            document.getElementById("text-message").value = "";
        }

    };
    /**
    * ----------------------------------------------------------------
    * people list search filter
    * ----------------------------------------------------------------
    */
    const filterSearch = (e) => {
        const keyword = e.target.value;
        socket.to(keyword).emit('message', 'hello this is hell working ')
        // if (keyword !== '') {
        //     const results = peopleList.filter((user) => {
        //         return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        //         // Use the toLowerCase() method to make it case-insensitive
        //     });
        //     // setPeopleList(...peopleList, results);
        // }
        // else {
        //     setPeopleList();
        //     // If the text field is empty, show all users
        // }

        setPeopleList(...peopleList);

    }
    /**
     * ----------------------------------------------------------------
     * Load people
     * ----------------------------------------------------------------
     */
    const getPeopleList = async () => {
        const data = await post_api_call('/admin/v1/fetch-user-list', {});
        // console.log('++++ people list ++++++++ ', data);
        if (data.response.length > 0) {
            setTab(data.response[0])
        }
        setPeopleList(data.response);
    }

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
        getPeopleList();
        getLoggedInUser();
        getChatGroups();

        socket.on('connect', () => {
            setIsConnected(true);
            console.log('Client : socket is connected : ', socket.id)
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('pong', () => {
            setLastPong(new Date().toISOString());
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };
    }, []);




    return (
        <>
            <div id="content" className="content content-full-width">
                <link href={"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"} rel="stylesheet" />

                <div className="container-fluid" style={{ height: "100%", marginTop: "10px" }}>
                    <div className="row clearfix">
                        <div className="col-lg-12 mb-0" style={{ height: '100%' }}>
                            <div className="card chat-app">

                                {/* people list start */}
                                <div id="plist" className="people-list">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-search"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Search..." onChange={filterSearch} />
                                    </div>
                                    {/* groups start */}
                                    <ul className="list-unstyled chat-list mt-2 mb-0" id="people-listing">
                                        Groups
                                        {
                                            peopleGroup && peopleGroup.map((item, index) => {
                                                return (
                                                    <li key={item._id} className={item._id === tab._id ? "clearfix active " : "clearfix"} onClick={(e) => setTab(item)}>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                                        <div className="about">
                                                            <div className="name">{item.name}</div>
                                                            <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                    {/* groups end  */}

                                    {/* people list start */}
                                    <ul className="list-unstyled chat-list mt-2 mb-0" id="people-listing">
                                        People
                                        {/* <li className="clearfix">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                                            <div className="about">
                                                <div className="name">Vincent Porter</div>
                                                <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>
                                            </div>
                                        </li>
                                        <li className="clearfix active">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                            <div className="about">
                                                <div className="name">Aiden Chavez</div>
                                                <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                            </div>
                                        </li>
                                         */}

                                        {
                                            peopleList && peopleList.map((item, index) => {

                                                return (
                                                    <li key={item._id} className={item._id === tab._id ? "clearfix active " : "clearfix"} onClick={(e) => setTab(item)}>
                                                        <img src={item.avatar ? item.avatar : "https://bootdey.com/img/Content/avatar/avatar2.png"} alt="avatar" />
                                                        <div className="about">
                                                            <div className="name">{item.name}</div>
                                                            <div className="status"> <i className="fa fa-circle offline"></i> offline since Oct 28 </div>
                                                        </div>
                                                    </li>
                                                )

                                            })
                                        }

                                    </ul>
                                </div>
                                {/* people list end  */}

                                {/* chat window begin */}
                                <div className="chat" id="chatbox-window" >
                                    <div className="chat-header clearfix bg-gradient-teal">
                                        <div className="row " >
                                            <div className="col-lg-6">
                                                <a href="#" data-toggle="modal" data-target="#view_info">
                                                    <img src={tab.avatar ? tab.avatar : "https://bootdey.com/img/Content/avatar/avatar2.png"} alt="avatar" />
                                                </a>
                                                <div className="chat-about">
                                                    <h6 className="m-b-0">{tab.name}</h6>
                                                    <small>Last seen: 2 hours ago</small>


                                                </div>
                                            </div>
                                            {/* <div className="col-lg-6 hidden-sm text-right">
                                                <a href="#" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
                                                <a href="#" className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
                                                <a href="#" className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
                                                <a href="#" className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="chat-history" id="msg-history">
                                        <ul className="m-b-0">


                                            {/* sender message start */}
                                            <li key={'dahvdshavd'} className="clearfix">
                                                <div className="message-data text-right">
                                                    <span className="message-data-time">10:10 AM, Today</span>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                                </div>
                                                <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                            </li>
                                            {/* sender message end  */}



                                            {/* receiver message start   */}

                                            <li key={'asdhsdvhadhbdj'} className="clearfix">
                                                <div className="message-data">
                                                    <span className="message-data-time">10:15 AM, Today</span>
                                                </div>
                                                <div className="message my-message">Project has been already finished and I have results to show you.</div>
                                            </li>
                                            {/* receiver message end   */}



                                        </ul>
                                    </div>
                                    <div className="chat-message clearfix">
                                        <div className="input-group mb-0">
                                            <a className="input-group-prepend" onClick={handleKeyDown}>

                                                <span className="input-group-text" data-id="send-button" ><i className="fa fa-send"></i></span>

                                            </a>
                                            <textarea type="text" className="form-control" id="text-message" data-id="send-text" placeholder="Enter text here..." onKeyDown={handleKeyDown}></textarea>
                                        </div>
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