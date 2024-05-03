import CommentBox from "./CommentBox";
import CommentFeed from "./CommentFeed";

import { useState } from "react";

export default function CommentSection({ postId, comments, setComments }) {

    return (
        <div className="w-full bg-[#2a313d] text-white p-2 rounded-[10px]">
            <CommentBox postId={postId} />
            <CommentFeed postId={postId} comments={comments} setComments={setComments} />
        </div>
    )
}