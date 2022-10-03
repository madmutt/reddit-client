import React, { useEffect } from 'react';
import './Subreddits.css';
import Subreddit from "./subreddit/Subreddit";
import { useDispatch, useSelector } from 'react-redux';
import { loadSubreddits } from "../../store/subredditsSlice";

function Subreddits(props) {
    const {getPosts} = props;
    const dispatch = useDispatch();
    const subreddits = useSelector((state) => state.subreddits);

    const { isLoading, error } = subreddits;

    const term = "cats";

    useEffect(() => {
        dispatch(loadSubreddits(term));
    }, [dispatch]);

    if (isLoading) {
        return (
            <aside id="aside" className="aside visible">
                <h2>Sub<span>reddit</span>s</h2>
                <p>Loading...</p>
            </aside>
            );
    }

    if (error) {
        return (
            <aside id="aside" className="aside visible">
                <h2>Sub<span>reddit</span>s</h2>
                <p>Error failed to load posts.</p>
                <button
                    type="button"
                    onClick={() => dispatch(loadSubreddits(term))}
                >
                Try again
                </button>
            </aside>
            );
    }

    if (subreddits.subreddits.length === 0) {
        return (
                <aside id="aside" className="aside visible">
                    <h2>Sub<span>reddit</span>s</h2>
                    <p>Nothing available for {term}.</p>
                    <p>Please try something else.</p>
                </aside>
            );
    }

    return (
        <aside id="aside" className="aside visible">
            <h2>Sub<span>reddit</span>s</h2>
            <ul>
                {
                    subreddits.subreddits.length > 0 ? subreddits.subreddits.map((subreddit,i) => <Subreddit getPosts={getPosts} key={i} icon={subreddit.icon} text={subreddit.text} selected={ i===0 ? 'selected' : '' } />) : <Subreddit getPosts={getPosts} icon={"https://loremflickr.com/32/32"} text={"Nothing here - search again!"} />
                }
            </ul>
        </aside>
        );
}

export default Subreddits;
