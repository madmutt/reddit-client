import React from 'react';
import './Posts.css';

function Posts() {
    return (
        <section id="posts">
            <h2>Posts</h2>
            <article className="post">
                <h3>Post title</h3>
                <div class="postContent">
                    <p>Post text goes here... (if any) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur enim a purus commodo pharetra. In hac habitasse platea dictumst. Nunc lorem ante, lacinia at volutpat quis, aliquet id ipsum. Nulla et elit elementum, tristique turpis sit amet, lacinia lorem.</p>
                </div>
                <div class="postImage">
                    <img src="https://loremflickr.com/300/400" alt="" />
                </div>
                <footer>
                    <p>Up votes: 1.3k</p>
                    <p>Posted x ago</p>
                    <p><span class="icon">&#9997;</span> 25</p>
                </footer>
            </article>
            <article className="post">
                <h3>Post title</h3>
                <div class="postContent">
                    <p>Post text goes here... (if any) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur enim a purus commodo pharetra. In hac habitasse platea dictumst. Nunc lorem ante, lacinia at volutpat quis, aliquet id ipsum. Nulla et elit elementum, tristique turpis sit amet, lacinia lorem.</p>
                </div>
                <div class="postImage">
                </div>
                <footer>
                    <p>Votes: 1.3k</p>
                    <p>Posted x ago</p>
                    <p><span class="icon">&#9997;</span> 25</p>
                </footer>
            </article>
            <article className="post">
                <h3>Post title</h3>
                <div class="postContent">
                    <p>Post text goes here... (if any) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur enim a purus commodo pharetra. In hac habitasse platea dictumst. Nunc lorem ante, lacinia at volutpat quis, aliquet id ipsum. Nulla et elit elementum, tristique turpis sit amet, lacinia lorem.</p>
                </div>
                <div class="postImage">
                    <img src="https://loremflickr.com/1400/800" alt="" />
                </div>
                <footer>
                    <p>Votes: 1.3k</p>
                    <p>Posted x ago</p>
                    <p><span class="icon">&#9997;</span> 25</p>
                </footer>
            </article>
        </section>
    );
}

export default Posts;
