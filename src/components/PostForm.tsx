import { FormEvent, useState } from "react";
import React from "react";
import Modal from 'react-modal';
import { Post, Props } from "./SocialPosts";
import { PostInList } from "./PostInList";
import './PostForm.css'



export const PostForm = ({ onSubmitForm }: Props) => {
    const [newPosts, setNewPosts] = useState<Post[]>([]);
    const [modalIsOpen, setIsOpen] = React.useState(true);
    const [newTitle, setNewTitle] = useState('');
    const [newThought, setNewThought] = useState('');

    
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
         return handlePost; 
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }

    const handlePost = (post: Post) => {
        const newPosts = post.title && post.thought;
        setIsOpen(false);
        setNewPosts(newPosts => [...newPosts, post]);
        return post;
    }

    return(
        <>
        <Modal className='Modal' isOpen={modalIsOpen}>
        <div className="Form-div">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Title</label><br></br>
                <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input><br></br>
                <label>Thought</label><br></br>
                <input value={newThought} onChange={(e) => setNewThought(e.target.value)}></input><br></br>
                <input type="Submit" value="Submit"></input>
            </form>
        </div>
        </Modal>

        
        </>
        )
}