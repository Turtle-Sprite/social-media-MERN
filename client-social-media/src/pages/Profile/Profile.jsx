import React from 'react'
import Topbar from '../components/top-bar/Topbar'
import Sidebar from '../components/sidebar/Sidebar'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/rightbar/Rightbar'

function Profile() {
  return (
    <div>
        <Topbar />
        <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
    </div>
  )
}

export default Profile
