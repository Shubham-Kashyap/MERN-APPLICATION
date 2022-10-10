import React from 'react';
import { useSelector } from 'react-redux';
import { io } from "socket.io-client";



const URL = "http://localhost:4000";
const socket = io(URL, {
    // autoConnect: false,
    transports: ['websocket']
});


const _showContent = () => {
    const res = useSelector(state => state.authReducer.loggedInUser);
    const [loggedInUserData, setLoggedInUserData] = React.useState(null);
    /**
     * ---------------------------------------------------------------------------------
     * on enter keypress -- send message to user 
     * ---------------------------------------------------------------------------------
     */
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.target.getAttribute('data-id') === 'send-button') {
            console.log('++++++++ msg sent ++++++++');
            socket.emit(`message`, {
                user: loggedInUserData._id,
                msg: document.getElementById('text-message').value,
                socketId: socket.id
            });
            document.getElementById("text-message").value = "";
        }

    };
    /**
     * ---------------------------------------------------------------------------------
     * on click send button -- send message to user 
     * ---------------------------------------------------------------------------------
     */
    const send = (event) => {
        const msg = document.getElementById('text-message').value;
        if (msg !== "") {
            console.log('++++++++ msg sent ++++++++');
        }
    }
    const sendPing = () => {
        socket.emit('ping');
    };
    /**
     * -----------------------------------------------------------------------------------
     * on take effect -- on load 
     * -----------------------------------------------------------------------------------
     */
    React.useEffect(() => {
        setLoggedInUserData(res)
    }, [res]);
    React.useEffect(() => {
        // getLoggedInUser();
        socket.on('connect', () => {

            console.log('Client : socket is connected : ', socket.id)
        });

        socket.on('disconnect', () => {

        });
        socket.on(`msg-${loggedInUserData?._id}`, (data) => {

        })
        socket.on('pong', () => {
            // setLastPong(new Date().toISOString());
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };


    }, [socket]);
    return (
        <div>
            <div className="chat-message clearfix">
                <div className="input-group mb-0">
                    <a className="input-group-prepend" onClick={send} style={{ cursor: " pointer " }}>
                        <span className="input-group-text" data-id="send-button" ><i className="fa fa-send"></i></span>
                    </a>
                    <textarea type="text" className="form-control" id="text-message" data-id="send-text" placeholder="Type your message here..." onKeyDown={handleKeyDown}></textarea>
                </div>
            </div>
        </div>
    );
}
const _hideContent = () => {
    return (
        <div className="none">

        </div>
    );
}


const SendMessage = ({ tab }) => {

    return (
        <>
            {tab ? _showContent() : _hideContent()}
        </>
    );
}

export default SendMessage
