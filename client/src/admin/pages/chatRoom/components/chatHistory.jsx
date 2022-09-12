import React from 'react';
import WelcomeMessage from "./welcomeMessage";
import { tabData } from "./peoplelist";

const Chats = () => {
    return (
        <>
            <div className="chat-history" id="msg-history">
                <ul className="m-b-0">


                    {/* sender message start */}
                    <li key={'dahvdshavddasa'} className="clearfix">
                        <div className="message-data text-right">
                            {/* <span className="message-data-time">10:10 AM, Today</span> */}
                            {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{ marginRight: '5px' }} alt="avatar" /> */}
                            <div className="message other-message"> Hi Aiden, how are you? How is the project coming along? dasdas sd sadasdsa dsa dsa dsa d sadsa dsa dsa d  </div>

                        </div>
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

        </>
    );
}
const _returnChatHistory = () => {
    return <Chats />
}
const _returnWelcomeMessage = () => {
    return <WelcomeMessage />
}


const ChatHistory = (props) => {

    return (
        <>

            {
                tabData.length >= 1 ? _returnChatHistory() : _returnWelcomeMessage()
            }
        </>

    );

}


export default ChatHistory;