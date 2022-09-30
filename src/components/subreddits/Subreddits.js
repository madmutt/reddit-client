import React from 'react';
import './Subreddits.css';
import Subreddit from "./subreddit/Subreddit";

function Subreddits(props) {
    const {getPosts} = props;

    const data = [
        {icon: "https://loremflickr.com/32/32", text: "Dogs"},
        {icon: "https://loremflickr.com/32/32", text: "Cats"},
        {icon: "https://loremflickr.com/32/32", text: "Landscapes"},
        {icon: "https://loremflickr.com/32/32", text: "Food"},        
    ];

    return (
        <aside id="aside" className="aside visible">
            <h2>Sub<span>reddit</span>s</h2>
            <ul>
                {
                    data.map(subreddit => <Subreddit getPosts={getPosts} icon={subreddit.icon} text={subreddit.text} />)
                }
            </ul>
        </aside>
        );
}

export default Subreddits;
