import { useState } from "react";
import { PostForm } from "./PostForm";
import { Post } from './SocialPosts';

interface Props {
    post: Post;
}

export const PostInList = (post: Post) => {
    
//It has a prop named post that accepts a Post object
//It has a callback prop named onDelete that takes no arguments. This is called when the trash button is clicked.


    return (
        <><h3>New Post title: {post.title}</h3>
        <p>New Thought: {post.thought}</p>
        
        </>
    )
}