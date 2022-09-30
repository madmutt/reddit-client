import React from 'react';

function Subreddit(props) {
    const {getPosts,icon,text} = props;

    return (
        <li onClick={getPosts}>
            <img src={icon} alt="" /> {text}
        </li>
        );
}

export default Subreddit;


