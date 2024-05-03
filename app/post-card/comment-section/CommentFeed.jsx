import CommentReplies from "./CommentReplies"

import { useState } from "react";

export default function CommentFeed({ postId, comments, setComments }) {

    const [viewReplies, setViewReplies] = useState(Array(comments.length).fill(false));

    const toggleViewReplies = (index) => {
        const newViewReplies = [...viewReplies];
        newViewReplies[index] = !newViewReplies[index];

        setViewReplies(newViewReplies);
    }

    return (
        <div className="flex flex-col gap-2">
            {comments.map((comment, index) => (
                <div key={index} className="mt-[1rem] grid grid-cols-12">
                    <div className="col-span-1 mb-[10px]">
                        <div className="cols-span-2 rounded-full h-full flex flex-col items-center justify-start">
                            <figure>
                                <img src='/github.svg' width="30px" height="30px"></img>
                            </figure>
                            {
                                viewReplies[index] && <div className="mt-1 rounded-full bg-slate-400 opacity-50 w-[2px] h-full"></div>
                            }
                        </div>
                    </div>
                    <div className="col-span-10">
                        <div className="flex flex-col h-[30px] justify-center">
                            <div>{comment.comment_by.username}</div>
                        </div>
                        <div>{comment.comment}</div>
                        <div className="flex flex-row gap-4">
                            <button>Reply</button>
                            <button onClick={() => toggleViewReplies(index)} className="text-slate-400">View Replies</button>
                        </div>
                        {
                            viewReplies[index] && (
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