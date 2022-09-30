import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
    //Show/hide subreddits
    const toggleAside = () => {
        const el = document.getElementById("aside");
        el.classList.contains("visible") === true ? el.classList.remove("visible") : el.classList.add("visible");
    }
    const getPosts = () => {
        toggleAside();
    }
    //PhotoWall
    const togglePhotoWall = () => {
        const photoWall = document.getElementById("photoWall");
        const photoWallButton = document.getElementById("photoWallButton");
        const posts = document.getElementById("posts");
        //check if photoWall is visible
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
    //fullscreen slideshow
    let slideIndex = 0;
    let slides;
    const showSlides = (n) => {
        if(n >= slides.length){
            slideIndex = 0;
        }
        if(n < 0){
            slideIndex = slides.length-1;
        }
        document.getElementById('currentImg').src = slides[slideIndex].src;
    }
    const showSlideShow = (e) => {
        //set clicked img as first slide
        document.getElementById('currentImg').src = e.target.src;
        //get index of clicked image
        slides = Array.from(document.getElementById('photos').children);
        slideIndex = slides.findIndex(img => img.src === e.target.src);
        //show slide container
        const slide = document.getElementById("slide");
        slide.style.opacity = '1';
        slide.style.zIndex = '100';
        slide.style.left = '0';
        slide.style.top = '0';
        slide.style.width = '100%';
        slide.style.height = '100%';
    }
    const hideSlideShow = () => {
        const slide = document.getElementById("slide");
        slide.style.opacity = '0';
        slide.style.zIndex = '-1';
        slide.style.left = '50%';
        slide.style.top = '50%';
        slide.style.width = '0';
        slide.style.height = '0';
    }
    const showNextSlide = () => {
        showSlides(slideIndex += 1);
    }
    const showPrevSlide = () => {
        showSlides(slideIndex += -1);
    }

    return (
        <div className="wrapper">
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
                        <img onClick={showSlideShow} src="https://loremflickr.com/2510/3000" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/3520/3500" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/2530/3000" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/3540/3500" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/1550/1500" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/2560/3000" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/1570/1500" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/2580/3000" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/3590/3500" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/2500/3010" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/3500/3520" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/1500/1530" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/2500/3040" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/3500/3550" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/3500/3560" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/1500/1570" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/2500/3080" alt="" />
                        <img onClick={showSlideShow} src="https://loremflickr.com/3500/3590" alt="" />
                    </section>
                    <div id="slide">
                        <div className="img-wrapper">
                            <p onClick={hideSlideShow} className="btnclose">close</p>
                            <p onClick={showPrevSlide} className="prev">prev</p>
                            <p onClick={showNextSlide} className="next">next</p>
                            <img id="currentImg" src="https://loremflickr.com/2500/1646" alt="" />
                        </div>
                    </div>
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
