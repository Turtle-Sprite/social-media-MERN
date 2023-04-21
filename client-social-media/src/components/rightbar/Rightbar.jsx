import React from 'react'
import './rightbar.css'
import {FaBirthdayCake} from 'react-icons/fa'
import Online from '../online/Online'

import {Users} from '../../dummyData'

function Rightbar({profile}) {
  const HomeRightbar = () => {
    return(
      <>
       <div className='birthdayContainer'>
          <FaBirthdayCake className='birthdayIcon' />
          <span className='birthdayText'>
            <b>Little bear</b> and <b>3 others</b> have birthdays today.
          </span>
          </div>
          <div className='rightbarAd'>
            Place ad here.
          </div>
          <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
         {Users.map((u) => (
          <Online key={u.id} user={u} />  
        ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
    <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarinfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
    </>)
  }


  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
       { profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar
