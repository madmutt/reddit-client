import React from 'react';
import logo from '../../logo.png';
import './Header.css';
import Search from "./search/Search";

function Header(props) {
    const {toggleAside, togglePhotoWall} = props;
    return (
        <header>
            <button id="aside-toggle" type="button" onClick={toggleAside}></button>
            <h1><img src={logo} className="logo" alt="logo" />Sub<span>reddit</span>Reader</h1>
            <Search />
            <button type="button" id="photoWallButton" onClick={togglePhotoWall}>Photowall</button>
        </header>
        );
}

export default Header;
