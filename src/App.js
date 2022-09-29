import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
    const togglePhotoWall = () => {
        const photoWall = document.getElementById("photoWall");
        const photoWallButton = document.getElementById("photoWallButton");
        const posts = document.getElementById("posts");

        if(photoWall.offsetParent === null){
            posts.style.display = "none";
            photoWallButton.innerHTML = "Posts";
            photoWall.style.display = "block";
        }
        else{
            photoWall.style.display = "none";
            photoWallButton.innerHTML = "Photowall";
            posts.style.display = "block";
        }
    }

    const toggleAside = () => {
        const el = document.getElementById("aside");
        el.classList.contains("visible") === true ? el.classList.remove("visible") : el.classList.add("visible");
    }
    const getPosts = () => {
        toggleAside();
    }
    return (
        <div class="wrapper">
            <header>
                <button className="aside-toggle" type="button" onClick={toggleAside}></button>
                <h1><img src={logo} className="logo" alt="logo" />Sub<span>reddit</span>Reader</h1>
                <form className="search-form"> {/* See react > adopt-a-pet > components - search */}
                    <label for="search">Search:</label>
                    <input type="text" id="search" className="search" />
                    <button type="submit" className="search-button">🔎</button>
                </form>
                <button type="button" id="photoWallButton" onClick={togglePhotoWall}>Photowall</button>
            </header>
            <article className="main">
                <section id="posts">
                    <h2>Posts</h2>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                </section>
                <section id="photoWall">
                <h2>Photo Wall</h2>
                    <section id="photos">
                        <img src="https://loremflickr.com/250/300" alt="" />
                        <img src="https://loremflickr.com/350/350" alt="" />
                        <img src="https://loremflickr.com/250/300" alt="" />
                        <img src="https://loremflickr.com/350/350" alt="" />
                        <img src="https://loremflickr.com/150/150" alt="" />
                        <img src="https://loremflickr.com/250/300" alt="" />
                        <img src="https://loremflickr.com/150/150" alt="" />
                        <img src="https://loremflickr.com/250/300" alt="" />
                        <img src="https://loremflickr.com/350/350" alt="" />
                        <img src="https://loremflickr.com/250/300" alt="" />
                        <img src="https://loremflickr.com/350/350" alt="" />
                        <img src="https://loremflickr.com/150/150" alt="" />
                        <img src="https://loremflickr.com/250/300" alt="" />
                        <img src="https://loremflickr.com/350/350" alt="" />
                        <img src="https://loremflickr.com/350/350" alt="" />
                        <img src="https://loremflickr.com/150/150" alt="" />
                        <img src="https://loremflickr.com/250/300" alt="" />
                        <img src="https://loremflickr.com/350/350" alt="" />
                    </section>
                </section>
            </article>
            <aside id="aside" className="aside visible">
                <h2>Subreddits</h2>
                <ul>
                    <li onClick={getPosts}>img photography</li>
                    <li onClick={getPosts}>img dogs</li>
                    <li onClick={getPosts}>img CrayzyStuff</li>
                    <li onClick={getPosts}>img Landscape Photograpy and some more long words</li>
                    <li onClick={getPosts}>img another one</li>
                </ul>
            </aside>
            <footer className="footer">
            <p>&copy; NotReddit 2022</p>
            </footer>
        </div>
    );
}

export default App;
