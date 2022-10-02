import React from 'react';
import stl from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={stl.nav}>
            <ul>
                <li><NavLink to='/profile' className={navData => navData.isActive ? stl.active : stl.nav_link}>Profile</NavLink></li>
                <li><NavLink to='/dialogs' className={navData => navData.isActive ? stl.active : stl.nav_link}>Message</NavLink></li>
                <li><NavLink to='/news' className={navData => navData.isActive ? stl.active : stl.nav_link}>News</NavLink></li>
                <li><NavLink to='/music' className={navData => navData.isActive ? stl.active : stl.nav_link}>Music</NavLink></li>
                <li><NavLink to='/friends' className={navData => navData.isActive ? stl.active : stl.nav_link}>Friends</NavLink></li>
                <li><NavLink to='/group' className={navData => navData.isActive ? stl.active : stl.nav_link}>Groups</NavLink></li>
            </ul>
        </nav>);
}

export default Navbar;