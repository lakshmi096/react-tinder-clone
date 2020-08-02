import React from 'react';
import "./Chats.css";
import Chat from './Chat';

const Chats = () => {
    return ( 
        <div className="chats">
            <Chat
                name="Johny"
                message="Hi"
                timestamp="40 sec ago"
                profilePic="https://wallpapercave.com/wp/wp2126272.jg"
            />
            <Chat
                name="Rachel"
                message="Hello"
                timestamp="20 sec ago"
                profilePic="https://wallpapercave.com/wp/wp2126272.jpg"
            />
            <Chat
                name="Abraham"
                message="Hi"
                timestamp="50 sec ago"
                profilePic="https://wallpapercave.com/wp/wp2126272.jpg"
            />
        </div>
    );
}
 
export default Chats;