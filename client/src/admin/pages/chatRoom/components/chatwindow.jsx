import react from 'react';
import ChatHistory from './chatHistory';


const _welcomeMessage = () => {
    return (
        <div className="chat-history" id="msg-history">
            <ul className="m-b-0">

                {/* sender message start */}
                <li key={'dahvdshavd'} className="clearfix">
                    <div className="message-data text-right">
                        <span className="message-data-time">10:10 AM, Today</span>
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                    </div>
                    <div className="message other-message float-right"> Hi welcome to react chat application  </div>
                </li>
                {/* sender message end  */}

            </ul>

        </div>
    );
}
const ChatWindow = () => {
    return (
        {

        }
    );
}

export default ChatWindow;