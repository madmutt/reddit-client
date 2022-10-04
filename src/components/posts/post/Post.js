import React from 'react';
import moment from 'moment';

function Post(props) {
    return (
        <article className="post">
            <h3>{props.title}</h3>
            <div className="postContent">
                <p>{props.content}</p>
            </div>
            <div className="postImage">
                <img src={props.img} alt="" />
            </div>
            <footer>
                <p>Up votes: {props.upvotes}</p>
                <p>{moment.unix(props.created).fromNow()}</p>
                <p><span className="icon">&#9997;</span> {props.num_comments}</p>
            </footer>
        </article>
        );
}

export default Post;
