import React from "react";
import "./Chat.css"
import Avatar from '@material-ui/core/Avatar'

function Chat({ name, message, profilePic, timestamp}){
    return <div className='chat'>
        <Avatar className='chat_image' src={profilePic} />
        <div className='chat_details'>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <div className='chat_timestamp'>
            <p>{timestamp}</p>
        </div>
    


    </div>;
}
export default Chat;