import React, { useEffect } from 'react';
import './Subreddits.css';
import Subreddit from "./subreddit/Subreddit";
import { useDispatch, useSelector } from 'react-redux';
import { loadSubreddits } from "../../store/subredditsSlice";
import { updateSubreddit } from "../../store/subredditsSlice";

function Subreddits(props) {
    const {getPosts} = props;
    const dispatch = useDispatch();
    const subreddits = useSelector((state) => state.subreddits);
    const subreddit = subreddits.subreddits[0] ? subreddits.subreddits[0].url : '';
    let searchTerm = useSelector((state) => state.search.searchTerm);
    if(searchTerm === ''){searchTerm = "Cats";}

    const { isLoading, error } = subreddits;

    useEffect(() => {
        dispatch(loadSubreddits(searchTerm));
        dispatch(updateSubreddit(subreddit));
    }, [dispatch, searchTerm, subreddit]);

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
                <p>Error failed to load subreddits.</p>
                <button
                    type="button"
                    onClick={() => dispatch(loadSubreddits(searchTerm))}
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
                    <p>Nothing available for {searchTerm}.</p>
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
