import React from 'react';
import WelcomeMessage from "./welcomeMessage";
import { post_api_call } from "../../../../helpers/api_calls";
import { tabData } from "./peoplelist";
import UserMessage from './userMessage';




const _returnChatHistory = (messages) => {
    return <UserMessage messages={messages} />
}
const _returnWelcomeMessage = () => {
    return <WelcomeMessage />
}


const ChatHistory = (props) => {
    const [messageHistory, setMessageHistory] = React.useState([]);

    async function getMessageHistory() {
        const res = await post_api_call('/admin/v1/get-chat-history', {});
        setMessageHistory(res.response);
    }
    React.useEffect(() => {
        getMessageHistory()

    }, []);
    return (
        <>
            {
                // tabData.length >= 1 ? _returnChatHistory() : _returnWelcomeMessage()
                (messageHistory && messageHistory.length > 1 ? _returnChatHistory(messageHistory) : _returnWelcomeMessage())

            }
        </>

    );

}


export default ChatHistory;