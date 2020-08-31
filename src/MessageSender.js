import React, {useState} from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';

import firebase from "firebase";
import db from "./firebase";

function MessageSender() {
    const [{user}, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const [imageUrl, setImageurl] = useState('');
    const handleSubmit = e =>{
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,

        })


        setInput("");
        setImageurl("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src ={user.photoURL}/>
                <form>
                    
                    <input 
                    value ={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messagesender__input" 
                    placeholder={`What's on your mind?, ${user.displayName}`}
                    />

                    <input 
                    value = {imageUrl}
                    onChange = {(e)=> setImageurl(e.target.value)}
                    placeholder="Image URL (optional)" 
                    />
                    <button onClick={handleSubmit} type="submit">Hidden Submit btn</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style ={{color: "red"}}/>
                    <h1>Live Video</h1>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style ={{color: "green"}}/>
                    <h1>Photo/Video</h1>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style ={{color: "orange"}}/>
                    <h1>Feeling/Activity</h1>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
