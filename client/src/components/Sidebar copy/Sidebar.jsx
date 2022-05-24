import React from 'react';
import './sidebar.css';
import { RssFeed, Person, Work, Event } from "@mui/icons-material";
import { Users } from "../../dummyData"
import CloseFriend from '../closeFriends/CloseFriend'

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Person className="sidebarIcon"/>
                        <span className="sidebarListItemText">Friends</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>
                <hr className='sidebarHr'/>
                <ul className="sidebarContactList">
                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}