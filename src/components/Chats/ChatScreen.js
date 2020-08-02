import React,{useState} from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";
import InputBox from './InputBox';

const ChatScreen = () => {
    const [messages, setMessages] = useState([
        {
            name: "Rachel",
            image: "https://wallpapercave.com/wp/wp2126272.jpg",
            message: "Hey!! wassup?"
        },
        {
            name: "Rachel",
            image: "https://wallpapercave.com/wp/wp2126272.jpg",
            message: "Wanna catch up?"
        },
        {
            message: "Sure!! Anytime"
        }
    ]);

    const messageList = messages.map(message => {
        return message.name ? (
            <div className="chatScreen_message">
                <Avatar className="chat__image" alt={message.name} src={message.image}/>
                <p className="chatScreen__text">{message.message}</p>
            </div>
        ) : (
            <div className="chatScreen_message">
                <p className="chatScreen__myText">{message.message}</p>
            </div>
        )
    })

    return ( 
        <div className="chatScreen">
            <p className="chatScreen__matched">YOU MATCHED WITH RACHEL ON 10/03/20</p>
            {messageList}
            <InputBox/>
        </div> 
    );
}
 
export default ChatScreen;