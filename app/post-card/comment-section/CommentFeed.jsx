import CommentReplies from "./CommentReplies"

import { useState } from "react";
import axios from "axios";

export default function CommentFeed({ postId, comments, setComments }) {

    const [viewReplies, setViewReplies] = useState(false);

    const toggleViewReplies = () => {
        setViewReplies(prevViewReplies => !prevViewReplies);
    }

    /* const handleLikeChange = (index) => {

        try {

            const token = localStorage.getItem('token');
            console.log(index);
            if (!comments[index].liked) {
                const like = async () => {
                    const response = await axios.post('http://3.110.161.150:4000/api/post/like', {
                        'postId': postId
                    }, {
                        headers: {
                            'Authorization': token,
                            'Content-Type': 'application/json'
                        }
                    })

                    if (response.status === 201) {
                        const prevComments = [...comments];
                        prevComments[index].liked = true;
                        prevComments[index].likes = prevComments[index].likes + 1;
                        setComments(prevComments);
                    }
                }

                like();
            }
            else {
                const dislike = async () => {
                    const response = await axios.delete('http://3.110.161.150:4000/api/post/unlike', {
                        'postId': postId
                    }, {
                        headers: {
                            'Authorization': token,
                            'Content-Type': 'application/json'
                        }
                    })

                    if (response.status === 201) {
                        const prevComments = [...comments];
                        prevComments[index].liked = false;
                        prevComments[index].likes = prevComments[index].likes - 1;
                        setComments(prevComments);
                    }
                }

                dislike();
            }
        }
        catch (error) {
            console.log("Error occurred while liking/disliking comment: ", error)
        }
    } */

    return (
        <div className="flex flex-col gap-2">{
            comments.map((comment, index) => (
                <div key={index} className="mt-[1rem] grid grid-cols-12">
                    <div className="col-span-1 mb-[10px]">
                        <div className="cols-span-2 rounded-full h-full flex flex-col items-center justify-start">
                            <figure>
                                <img src='/github.svg' width="30px" height="30px"></img>
                            </figure>
                            {
                                viewReplies && <div className="mt-1 rounded-full bg-slate-400 opacity-50 w-[2px] h-full"></div>
                            }
                        </div>
                    </div>
                    <div className="col-span-10">
                        <div className="flex flex-col h-[30px] justify-center">
                            <div>{comment.comment_by.username}</div>
                        </div>
                        <div>{comment.comment}</div>
                        <div className="flex flex-row">
                            {/* <div className="flex flex-row gap-1.5">
                            <div className="flex flex-col items-center">{comment.likes}</div>
                            <button onClick={() => handleLikeChange(index)} className="flex flex-col justify-center mt-[2px]">
                                <figure>
                                    <img src={comment.liked ? '/heart-solid.svg' : '/heart-regular.svg'} width="13px" height="13px"></img>
                                </figure>
                            </button>
                        </div> */}
                            <div className="flex flex-row gap-4">
                                <button>Reply</button>
                                <button onClick={toggleViewReplies} className="text-slate-400">View Replies</button>
                            </div>
                        </div>
                        {
                            viewReplies && (
                                <div className="mt-[10px]">
                                    <div>
                                        <CommentReplies replies={comment.child_comments} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
            )
        }
        </div>
    )
}
