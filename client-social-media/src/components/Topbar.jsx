import React from 'react'
import './topbar.css'
import {AiOutlineSearch  } from "react-icons/ai";

function Topbar() {
  return (
    <div className='top-bar-container'>
      <div className="topbar-left">
        <span className='logo'>SocialforLosers</span>
      </div>
    <div className="topbar-center">
        <div className="searchbar">
            <AiOutlineSearch className="search-icon" />
            <input placeholder="Search for friends, posts or videos" className="search-input" />
        </div>
    </div>
    <div className="topbar-right">
        <div className="topbar-links">
            <span className="topbar-link">Homepage</span>
        </div>
    </div>
    </div>
  )
}

export default Topbar
