import React from 'react';
    import './Header.css';
    import { BiCast, BiSearch } from 'react-icons/bi';
    import { FaUserCircle } from 'react-icons/fa';

    function Header() {
      return (
        <div className="header">
          <div className="search-bar">
            <BiSearch size={20} />
            <input type="text" placeholder="ค้นหาเพลง อัลบั้ม ศิลปิน พอดแคสต์" />
          </div>
          <div className="header-icons">
            <BiCast size={24} />
            <FaUserCircle size={24} />
          </div>
        </div>
      );
    }

    export default Header;
