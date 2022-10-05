import React from 'react';
import './Photowall.css';
import Photos from "./photos/Photos";
import Slideshow from "./slideshow/Slideshow";

function Photowall(props) {
    const {showSlideShow,hideSlideShow,showPrevSlide,showNextSlide} = props;

    return (
    <section id="photoWall">
        <h2>Photo<span>Wall</span></h2>
        <Photos showSlideShow={showSlideShow} />
        <Slideshow 
            hideSlideShow={hideSlideShow} 
            showPrevSlide={showPrevSlide} 
            showNextSlide={showNextSlide} 
        />
    </section>
    );
}

export default Photowall;
