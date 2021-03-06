import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] =  useState('');
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

    const handleSend = (e)=> {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput(""); 
    }

    return (
        <div className='chatScreen'>
            <p className='chatScreen_timestamp'>YOU MATCHED WITH CATDOG ON 10/11/21</p>
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
            
            <form className="chatScreen_input">
                <input
                    value={input} 
                    onChange= {e => setInput(e.target.value)}
                    className="chatScreen_inputField" 
                    placeholder="Type a message.." 
                    type="text" 
                />
                <button onClick={handleSend} type="submit" className="chatScreen_sendButton">SEND</button>
            </form>
        </div>
    );
}


export default ChatScreen