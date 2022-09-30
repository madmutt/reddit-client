import React from 'react';

function Slideshow(props) {
    const {hideSlideShow,showPrevSlide,showNextSlide} = props;

    return (
        <div id="slide">
            <div className="img-wrapper">
                <p onClick={hideSlideShow} className="btnclose">close</p>
                <p onClick={showPrevSlide} className="prev">prev</p>
                <p onClick={showNextSlide} className="next">next</p>
                <img id="currentImg" src="https://loremflickr.com/2500/1646" alt="" />
            </div>
        </div>
    );
}

export default Slideshow;
