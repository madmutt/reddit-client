import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Posts from "./components/posts/Posts";
import Photowall from "./components/photowall/Photowall";
import Subreddits from "./components/subreddits/Subreddits";
import Footer from "./components/footer/Footer";
import { useDispatch } from 'react-redux';
import { updateSubreddit } from "./store/subredditsSlice";

function App() {
    const dispatch = useDispatch();

    //Show/hide subreddits
    const toggleAside = () => {
        const el = document.getElementById("aside");
        el.classList.contains("visible") === true ? el.classList.remove("visible") : el.classList.add("visible");
    }
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

    //helper function to get li siblings to mark / unmark selected
    const getSiblings = elem => {
        const siblings = [];
        let sibling = elem.parentNode.firstChild;
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }return siblings;
    };

    const getPosts = (e) => {
        toggleAside();
        
        //mark selected
        const siblings = getSiblings(e.target);
        siblings.map(elem => elem.classList.remove("selected"));
        e.target.classList.add("selected");

        //document.getElementById('posts').firstChild.innerHTML = e.target.innerText.charAt(1).toUpperCase() + e.target.innerText.slice(2);
        dispatch(updateSubreddit("/r/" + e.target.innerText + "/"));
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
            <Header 
                toggleAside={toggleAside} 
                togglePhotoWall={togglePhotoWall} 
            />
            <article className="main">
                <Posts />
                <Photowall 
                    showSlideShow={showSlideShow} 
                    hideSlideShow={hideSlideShow} 
                    showPrevSlide={showPrevSlide} 
                    showNextSlide={showNextSlide} 
                />
            </article>
            <Subreddits 
                getPosts={getPosts} 
            />
            <Footer />
        </div>
    );
}

export default App;
