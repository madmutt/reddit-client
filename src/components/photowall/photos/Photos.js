import React from 'react';

function Photos(props) {
    const {showSlideShow} = props;

    const photos = [
            "https://loremflickr.com/2510/3000",
            "https://loremflickr.com/3520/3500",
            "https://loremflickr.com/2530/3000",
            "https://loremflickr.com/3540/3500",
            "https://loremflickr.com/1550/1500",
            "https://loremflickr.com/2560/3000",
            "https://loremflickr.com/1570/1500",
            "https://loremflickr.com/2580/3000",
            "https://loremflickr.com/3590/3500",
            "https://loremflickr.com/2500/3010",
            "https://loremflickr.com/3500/3520",
            "https://loremflickr.com/1500/1530",
            "https://loremflickr.com/2500/3040",
            "https://loremflickr.com/3500/3550",
            "https://loremflickr.com/3500/3560",
            "https://loremflickr.com/1500/1570",
            "https://loremflickr.com/2500/3080",
            "https://loremflickr.com/3500/3590"];

    return (
        <section id="photos">
            {
                photos.map(photo => <img onClick={showSlideShow} src={photo} alt="" />)
            }
        </section>
    );
}

export default Photos;
