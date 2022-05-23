import React from 'react'
import "./closeFriend.css"

export default function CloseFriend({user}) {
  return (
    <li className="sidebarContact">
        <img className="sidebarContactImg" src={user.profilePicture} alt="" />
        <span className="sidebarContactName">{user.username}</span>
    </li>
  )
}
