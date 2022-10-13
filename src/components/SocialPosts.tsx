import { PostForm } from "./PostForm";
import { PostInList } from "./PostInList";
import { MouseEvent, useState } from "react";
import React from "react";
import './SocialPosts.css';


export interface Post{
    title: string;
    thought: string;
};

export interface Props {
    onSubmitForm: (post: Post) => void;
    
};

export const SocialPosts = () => {
    const [newPosts, setNewPosts] = useState<Post[]>([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newThought, setNewThought] = useState('');

    const openModal = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        event.preventDefault();
        setIsOpen(true);
    }



    return (
    
        <>
        <header>My Thoughts</header>

            {modalIsOpen === false ?
            <div className="button-container"><button onClick={(event) => openModal(event)}>New Thoughts</button></div> : 
            <PostForm onSubmitForm={PostInList}/>}

            <div className="Post-List">
                {newPosts.map((post, i) => <table>
                    <th>Title</th>
                    <td key={i}>{post.title}</td>
                    <th>Thought</th>
                    <td key={i}>{post.thought}</td>
                    
                </table>)}
            </div>
        
        </>
    )
}
