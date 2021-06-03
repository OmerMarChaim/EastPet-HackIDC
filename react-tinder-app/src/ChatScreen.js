import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./ChatScreen.css";

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: 'Oren',
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Oren_Weigenfeld.jpg/1200px-Oren_Weigenfeld.jpg",
            message: 'Whats up ?'
        },
        {
            name: 'Oren',
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Oren_Weigenfeld.jpg/1200px-Oren_Weigenfeld.jpg",
            message: 'I want to adopt your dog!'
        },
        {
            message: 'Hey, call me!'
        }
    ])
    return (
        <div className='chatScreen'>
            <p className='chatScreen_timestamp'>YOU MATCHED WITH DOGGY ON 10/11/21</p>
            {messages.map(message => (
              message.name ? (
                <div className="chatScreen_message">
                    <Avatar
                        className='chatScreen_image'
                        alt={message.name}
                        src={message.image}
                    />
                    <p className='chatScreen_text'>{message.message}</p>
                </div>
              ) : (
                <div className="chatScreen_message">
                    <p className='chatScreen_textUser'>{message.message}</p>
                </div>
              )
            ))}
        </div>
    );
}


export default ChatScreen