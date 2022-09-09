import React from 'react';


const ChatHistory = (props) => {


    return <div className="chat-history" id="msg-history">
        <ul className="m-b-0">


            {/* sender message start */}
            <li key={'sender'} className="clearfix">
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
}


export default ChatHistory;