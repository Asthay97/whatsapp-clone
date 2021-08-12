import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVerticalIcon from "@material-ui/icons/MoreVert";
import {Avatar, IconButton} from "@material-ui/core";
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNaVZy9fqGkE_nv4s_WwtWLIu0qOVS6o8sA&usqp=CAU"/>
                <div className="sidebar__headerRight">
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
                <IconButton>
                <ChatIcon />
                </IconButton>
                <IconButton>
                <MoreVerticalIcon />
                </IconButton>
                
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start a new chat" type = "text" />
                </div>
                </div>
                <div className="sidebar__chats">
                    <SidebarChat name="Friend1"/>
                    <SidebarChat name="Friend2"/>
                    <SidebarChat name="Friend3"/>
            </div>
        </div>
    )
}

export default Sidebar;
