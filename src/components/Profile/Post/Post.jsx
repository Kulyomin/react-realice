import React from 'react';
import stl from './Post.module.css';

const Post = (props) => {
    return (
        <div className={stl.post}>
            <div>{props.message}</div>
        </div>
    );
}

export default Post;