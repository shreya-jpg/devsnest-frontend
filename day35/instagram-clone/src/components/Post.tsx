import React from "react";
import { PostType } from "../App";
const Post = ({post}: {post: PostType}) => {
    return (
    <div className="card post">
        <div className="card-header">
            <h5 className="card-title">{post.username}</h5>
            <i className="bi bi-three-dots"></i>
        </div>
        <img src={post.post} className="card-img-top" alt="..." />
            
    </div>
    );
};

export default Post;