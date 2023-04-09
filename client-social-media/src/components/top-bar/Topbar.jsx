import React from 'react'
import './topbar.css'
import {AiOutlineSearch } from "react-icons/ai";
import {BsPersonSquare, BsFillChatFill } from "react-icons/bs";
import {IoMdNotifications} from "react-icons/io";

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
            <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
            <div className="top-bar-icon-item">
                <BsPersonSquare />
                <span className="topbar-icon-badge">1</span>
            </div>
            <div className="top-bar-icon-item">
                <BsFillChatFill />
                <span className="topbar-icon-badge">1</span>
            </div>
            <div className="top-bar-icon-item">
                <IoMdNotifications />
                <span className="topbar-icon-badge">1</span>
            </div>
        </div>
    </div>
    <img src="" alt="username" className="topbar-img" />
    </div>
  )
}

export default Topbar
