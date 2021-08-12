import React from 'react';
import "./SidebarChat.css";
import {Avatar} from '@material-ui/core';

function SidebarChat({name}) {
    return (
        <div className="sidebarChat">
    <Avatar />
    <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>This is last message</p>
        </div>            
        </div>
    )
}

export default SidebarChat;
