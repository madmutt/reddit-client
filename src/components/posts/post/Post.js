import React from 'react';
import { Remarkable } from 'remarkable';
import DOMPurify from 'dompurify';
import moment from 'moment';

function Post(props) {
    const md = new Remarkable();
    const content = md.render(props.content);
    const sanitizedContent = () => ({
        __html: DOMPurify.sanitize(content)
    });

    return (
        <article className="post">
            <h3>{props.title}</h3>
            <div className="postContent">
                <div dangerouslySetInnerHTML={sanitizedContent()} />
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
