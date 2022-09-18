// import react from 'react';

const WelcomeMessage = () => {
    return (
        <div className="chat-history" id="msg-history">
            <ul className="m-b-0">

                {/* sender message start */}
                <li key={'dahvdshavd'} className="clearfix">
                    <div className="message-data text-center">
                        {/* <span className="message-data-time">10:10 AM, Today</span> */}
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{ marginRight: '5px' }} alt="avatar" />
                        <div className="message other-message text-center"> Hi welcome to react chat application . Please select individual from chat section or search a user to begin chat </div>

                    </div>
                </li>
                {/* sender message end  */}

            </ul>

        </div>
    );
}


export default WelcomeMessage;