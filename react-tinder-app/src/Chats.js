import React from "react";
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return <div className="chats">
        <Chat
            name="Oren"
            message="I want your dog"
            timestamp="40 seconds ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Oren_Weigenfeld.jpg/1200px-Oren_Weigenfeld.jpg"
        />
        <Chat
            name="Omer"
            message="I want your dog too"
            timestamp="40 seconds ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/e/e4/%D7%A2%D7%95%D7%9E%D7%A8_%D7%90%D7%93%D7%9D_%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%A9%D7%99_%D7%A4%D7%A8%D7%A0%D7%A7%D7%95_%28cropped%29.jpg"
        />
        <Chat
            name="Roi"
            message="Wow what a beautiful dog"
            timestamp="40 seconds ago"
            profilePic="https://www.researchgate.net/profile/David-Fofi/publication/303583827/figure/fig3/AS:366597748346882@1464415122912/ROI-selection-on-the-face-anatomy-of-a-human-Here-the-selection-of-ROI-with-respect-to.png"
        />
        <Chat
            name="Arad"
            message="Hey!"
            timestamp="40 seconds ago"
            profilePic="http://static1.squarespace.com/static/5d53d167aa6f99000196d665/5d627a160cb46e00016618b8/5d627af2d3e1900001842f5e/1579107727958/SquareSpace+EREZ.jpg?format=1500w"
        />
    </div>;

export default Chats