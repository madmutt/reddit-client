import React from 'react';

function Subreddit(props) {
    const {getPosts,icon,text,selected} = props;

    return (
        <li onClick={getPosts} className={selected}>
            <img src={icon} alt="" /> {text}
        </li>
        );
}

export default Subreddit;


