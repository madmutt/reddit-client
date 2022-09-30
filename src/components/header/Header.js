import React from 'react';
import logo from '../../logo.png';
import './Header.css';

function Header(props) {
    const {toggleAside, togglePhotoWall} = props;
    return (
        <header>
            <button id="aside-toggle" type="button" onClick={toggleAside}></button>
            <h1><img src={logo} className="logo" alt="logo" />Sub<span>reddit</span>Reader</h1>
            <form className="search-form"> {/* See react > adopt-a-pet > components - search */}
                <label for="search">Search:</label>
                <input type="text" id="search" className="search" />
                <button type="submit" className="search-button">🔎</button>
            </form>
            <button type="button" id="photoWallButton" onClick={togglePhotoWall}>Photowall</button>
        </header>
        );
}

export default Header;
