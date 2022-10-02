import React from 'react';
import stl1 from './Header.module.css';
import logo from '../../images/logo.png';

const Header = () => {
    return(
      <header className={stl1.header}>
        <div className='container'>
          <div className={stl1.header_inner}>
            <img src={logo} alt='LogoImage'></img>
            <span className={stl1.logo_name}>ʀᴇᴀʟɪᴄᴇ</span>
          </div>
        </div>
      </header>
    );
}

export default Header;