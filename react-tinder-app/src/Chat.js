import React from "react";
import Avatar from '@material-ui/core/Avatar'

function Chat({ name, message, profilePic, timestamp}){
    return <div className='chat'>
        <Avatar className='chat_image' src={profilePic} />
        <div>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <div>
            <p>{timestamp}</p>
        </div>
        <div>
            <h1>"Roi is the BEST!</h1>
        </div>
    


    </div>;
}
export default Chat;