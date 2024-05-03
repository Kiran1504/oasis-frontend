import { useEffect, useRef, useState } from "react";
import axios from "axios";

import EmojiPicker from 'emoji-picker-react';

export default function CommentBox({ postId }) {

    const [comment, setComment] = useState('');

    const [displayEmojiPicker, setDisplayEmojiPicker] = useState(false);
    const emojiPickerRef = useRef(null);

    const handlePostComment = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://3.110.161.150:4000/api/post/comment', {
                'postId': postId,
                comment: comment
            },
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                })

            setComment('');
        }
        catch (error) {
            console.log('error in posting comment: ', error);
        }
    }

    useEffect(() => {
        // Add event listener to close EmojiPicker when clicking outside
        function handleClickOutside(event) {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
                setDisplayEmojiPicker(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        // Unbind the event listener on cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    const handleEmojiClick = (e) => {
        setComment(prev => prev + e.emoji);
    };

    return (
        <div>
            {
                displayEmojiPicker && (
                    <div ref={emojiPickerRef} className="fixed top-0 left-0 z-index-99999999">
                        <EmojiPicker onEmojiClick={handleEmojiClick} emojiStyle="native" width="300px" height="400px" onBlur={() => setDisplayEmojiPicker(false)} />
                    </div>
                )
            }
            <div className="grid grid-cols-12 w-full gap-2 relative">
                <button onClick={() => setDisplayEmojiPicker(true)} className="col-span-1 flex flex-col items-center mt-[10px]">㋛</button>
                <div className="col-span-9 rounded-[15px] text-black">
                    <textarea
                        placeholder="Add a comment"
                        value={comment}
                        onChange={(e) => handleChange(e)}
                        className="bg-white w-full overflow-auto outline-none p-2 rounded-[10px] min-h-[40px] max-h-[200px]"
                        rows="50"
                        style={{ height: `${comment.split('\n').length * 20 + 20}px` }}
                    />
                </div>
                <button onClick={handlePostComment} className="col-span-2 p-2 bg-blue-500 rounded-[15px] max-h-[40px]">Post 🎯</button>
            </div>
        </div>
    )
}