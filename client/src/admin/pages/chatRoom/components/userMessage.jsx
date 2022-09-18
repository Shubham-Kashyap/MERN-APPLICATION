import React from "react";
const _senderMessage = () => {
    {/* sender message start */ }
    <li key={'dahvdshavddasa'} className="clearfix">
        <div className="message-data text-right">
            {/* <span className="message-data-time">10:10 AM, Today</span> */}
            {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{ marginRight: '5px' }} alt="avatar" /> */}
            <div className="message other-message"> Hi Aiden, how are you? How is the project coming along? dasdas sd sadasdsa dsa dsa dsa d sadsa dsa dsa d  </div>

        </div>
    </li>
    {/* sender message end  */ }
}
const _receiverMessage = () => {
    {/* receiver message start   */ }

    <li key={'asdhsdvhadhbdj'} className="clearfix">
        <div className="message-data">
            <span className="message-data-time">10:15 AM, Today</span>
        </div>
        <div className="message my-message">Project has been already finished and I have results to show you.</div>
    </li>
    {/* receiver message end   */ }
}
const UserMessage = ({ messages }) => {
    return (
        <>
            <div className="chat-history" id="msg-history">
                <ul className="m-b-0">
                    {
                        messages && messages.map((item, index) => {

                        })
                    }








                </ul>
            </div>

        </>
    );
}

export default UserMessage
