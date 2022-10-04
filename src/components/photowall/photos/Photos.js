import React from 'react';
import { useSelector } from 'react-redux';

function Photos(props) {
    const {showSlideShow} = props;
    const photos = useSelector((state) => state.posts.photos);

    if (photos.length === 0) {
        return (
            <section id="photos" style={{overflow: "visible"}}>
                <p style={{paddingTop: 15}}>Sorry, no photos.</p>
            </section>                
        );
    }

    return (
        <section id="photos">
            {
                photos.map((photo,i) => <img key={i} onClick={showSlideShow} src={photo} alt="" />)
            }
        </section>
    );
}

export default Photos;
