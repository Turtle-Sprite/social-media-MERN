import React from 'react'
import './rightbar.css'
import {FaBirthdayCake} from 'react-icons/fa'
import Online from '../online/Online'

import {Users} from '../../dummyData'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
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
      </div>
    </div>
  )
}

export default Rightbar
