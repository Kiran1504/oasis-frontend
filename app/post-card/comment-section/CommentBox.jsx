import { useEffect, useRef, useState } from "react";
import axios from "axios";

import EmojiPicker from 'emoji-picker-react';
import GifPicker from "gif-picker-react";

export default function CommentBox({ postId, setComments }) {
    const [comment, setComment] = useState('');
    const [displayEmojiPicker, setDisplayEmojiPicker] = useState(false);
    const [displayGifPicker, setDisplayGifPicker] = useState(false);
    const [gifURL, setGifURL] = useState(null);
    const emojiPickerRef = useRef(null);
    const gifPickerRef = useRef(null);

    const handlePostComment = async () => {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.post(
                'http://3.110.161.150:4000/api/post/comment',
                {
                    postId: parseInt(postId),
                    comment: comment,
                    gifURL: gifURL
                },
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.status === 200) {
                setComments(prev => [...prev, response.data._comment]);
                setComment('');
                setGifURL(null);
            }
        } catch (error) {
            console.log('error in posting comment: ', error);
        }
    };

    useEffect(() => {
        function handleClickOutside(event) {
            const emojiPicker = emojiPickerRef.current;
            const gifPicker = gifPickerRef.current;

            if (emojiPicker && !emojiPicker.contains(event.target)) {
                setDisplayEmojiPicker(false);
            }
            if (gifPicker && !gifPicker.contains(event.target)) {
                setDisplayGifPicker(false);
                gifPickerRef.current.blur();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    const handleEmojiClick = (e) => {
        setComment(prev => prev + e.emoji);
    };

    const handleGifClick = (gif) => {
        console.log(gif.url);
        setGifURL(gif.url);
        setComment('');
    };

    const handleRemoveGif = () => {
        setGifURL(null);
    }

    return (
        <div>
            {displayEmojiPicker && (
                <div ref={emojiPickerRef} className="fixed top-0 left-0 z-index-99999999">
                    <EmojiPicker
                        onEmojiClick={handleEmojiClick}
                        emojiStyle="native"
                        width="300px"
                        height="400px"
                        onBlur={() => setDisplayEmojiPicker(false)}
                    />
                </div>
            )}
            {displayGifPicker && (
                <div ref={gifPickerRef} className="fixed top-0 left-0 z-index-99999999">
                    <GifPicker
                        tenorApiKey={"AIzaSyB8irh6rYLNBmiOzVOiBkd8OPOpgdXVd_s"}
                        onGifClick={handleGifClick}
                        onBlur={() => {
                            setDisplayGifPicker(false);
                            gifPickerRef.current.blur();
                        }}
                    />
                </div>
            )}
            <div className="grid grid-cols-12 w-full gap-2 relative">
                <button
                    onClick={() => setDisplayEmojiPicker(true)}
                    className="col-span-1 flex flex-col items-center mt-[10px] h-[30px]"
                >
                    ㋛
                </button>
                <button
                    onClick={() => setDisplayGifPicker(true)}
                    className="col-span-1 flex flex-col items-center mt-[10px] h-[30px]"
                >
                    GIF
                </button>
                <div className="col-span-8 rounded-[15px] text-black">
                    {gifURL ? (
                        <div>
                            <img src={gifURL} className="w-full h-full" />
                        </div>
                    )
                        : (
                            <textarea
                                placeholder="Add a comment"
                                value={comment}
                                onChange={(e) => handleChange(e)}
                                className="bg-white w-full overflow-auto outline-none p-2 rounded-[10px] max-h-[200px]"
                                rows="50"
                                style={{ height: `${comment.split('\n').length * 20 + 20}px` }}
                            />
                        )
                    }
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <button onClick={handlePostComment} className="p-2 bg-blue-500 rounded-[15px] max-h-[40px]">
                        Post 🎯
                    </button>
                    {
                        gifURL && (
                            <button onClick={handleRemoveGif} className="bg-red-400 p-2 rounded-[15px] max-h-[40px]">Discard GIF</button>
                        ) 
                    }
                </div>
            </div>
        </div>
    );
}