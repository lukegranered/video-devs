import React from 'react';
import './rightbar.css';
import Online from "../online/Online"

export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img src="../../assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Your friends</b> have birthdays.</span>
                </div>
                <img src="../../assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Nashville</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">New Jersey</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Title:</span>
                        <span className="rightbarInfoValue">Full Stack Web Developer</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <ProfileRightbar/>
            </div>
        </div>
    )
}