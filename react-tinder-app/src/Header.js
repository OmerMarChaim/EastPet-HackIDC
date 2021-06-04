import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PetsIcon from '@material-ui/icons/Pets';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";


function Header(){
    return ( 
        <div className="header">
            <IconButton>
                <PersonIcon />
            </IconButton>
            <Link to = "/">
                <PetsIcon />
            </Link>
            <Link to = "/chat">
                <IconButton> 
                    <ChatBubbleIcon />
                </IconButton>
            </Link>
        </div>
    )
}

  export default Header