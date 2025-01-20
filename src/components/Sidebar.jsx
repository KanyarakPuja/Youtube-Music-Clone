import React from 'react';
    import './Sidebar.css';
    import { AiOutlineMenu } from 'react-icons/ai';
    import { BiHome, BiCompass, BiLibrary } from 'react-icons/bi';
    import { BsPlusLg } from 'react-icons/bs';

    function Sidebar({ isOpen, toggleSidebar }) {
      return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-header">
            <div className="hamburger-menu" onClick={toggleSidebar}>
              <AiOutlineMenu size={24} />
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/2048px-Youtube_Music_icon.svg.png"
              alt="Music Icon"
              className="music-icon"
            />
            <span className="music-text">Music</span>
          </div>
          <ul className="sidebar-menu">
            <li>
              <BiHome size={20} />
              <span className="menu-text">หน้าแรก</span>
            </li>
            <li>
              <BiCompass size={20} />
              <span className="menu-text">สำรวจ</span>
            </li>
            <li>
              <BiLibrary size={20} />
              <span className="menu-text">คลังเพลง</span>
            </li>
          </ul>
          <div className="sidebar-playlist">
            <div className="new-playlist">
              <BsPlusLg size={16} />
              <span>เพลย์ลิสต์ใหม่</span>
            </div>
            <div className="playlist-items">
              <div className="playlist-item">
                <p className="playlist-title">เพลงที่ชอบ</p>
                <p className="playlist-creator">4 เพลย์ลิสต์อัตโนมัติ</p>
              </div>
              <div className="playlist-item">
                <p className="playlist-title">2024 Recap</p>
                <p className="playlist-creator">สร้างมาเพื่อ Kanyarak</p>
              </div>
              <div className="playlist-item">
                <p className="playlist-title">-3-</p>
                <p className="playlist-creator">Kanyarak</p>
              </div>
              <div className="playlist-item">
                <p className="playlist-title">ตอนสำหรับฟังภายหลัง</p>
                <p className="playlist-creator">เพลย์ลิสต์อัตโนมัติ</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Sidebar;
