import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import './Posts.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from "../../store/postsSlice";
import Post from "./post/Post";

function Posts() {
    const dispatch = useDispatch();
    const subreddit = useSelector((state) => state.subreddits.subreddit);
    
    const posts = useSelector((state) => state.posts);

    const { isLoading, error } = posts;

    useEffect(() => {
        dispatch(loadPosts(subreddit));
    }, [dispatch, subreddit]);

    if (isLoading) {
        return (
            <section id="posts">
                <h2><Skeleton width={200} /></h2>
                <article className="post">
                    <p><Skeleton count={10} /></p>
                </article>
            </section>            
        );
    }

    if (error) {
        return (
            <section id="posts">
                <h2>Posts</h2>
                <p>Error failed to load posts.</p>
            </section>            
        );
    }

    if (posts.posts.length === 0) {
        return (
            <section id="posts">
                <h2>
                <Skeleton width={200}  />
                </h2>
                <p style={{marginLeft:10}}><Skeleton count={10} /></p>
            </section>                
        );
    }

    return (
        <section id="posts">
            <h2>{subreddit.charAt(3).toUpperCase() + subreddit.slice(4).replace(/.$/, '')}</h2>
            {
                posts.posts.map((post,i) => <Post key={i} title={post.title} content={post.content} img={post.img} upvotes={post.num_ups} created={post.created} num_comments={post.num_comments} />)
            }
        </section>
    );
}

export default Posts;
