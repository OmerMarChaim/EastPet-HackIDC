import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PetsIcon from '@material-ui/icons/Pets';
import IconButton from '@material-ui/core/IconButton';


function Header(){
    return ( 
        <div className="header">
            <IconButton>
                <PersonIcon />
            </IconButton>
            <PetsIcon />
            <IconButton> 
                <ChatBubbleIcon />
            </IconButton>
        </div>
    )
}

  export default Header