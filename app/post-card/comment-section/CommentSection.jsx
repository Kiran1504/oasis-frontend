import CommentBox from "./CommentBox";
import CommentFeed from "./CommentFeed";

import { useState } from "react";

export default function CommentSection({ postId, comments, setComments }) {

    /* const [comments, setComments] = useState([{
        id: 1,
        comment_by: {
            id: 9,
            username: "himanshu",
            profile_picture: null
        },
        comment: "YE EK PARENT COMMENT HAI",
        created_at: "2024-05-02T18:44:40.089Z",
        child_comments: [
            {
                comment: "YE EK CHILD COMMENT HAI",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
            {
                comment: "I am iron man",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
            {
                comment: "I am panda man",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
        ]
    },{
        id: 1,
        comment_by: {
            id: 9,
            username: "himanshu",
            profile_picture: null
        },
        comment: "YE EK PARENT COMMENT HAI",
        created_at: "2024-05-02T18:44:40.089Z",
        child_comments: [
            {
                comment: "YE EK CHILD COMMENT HAI",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
            {
                comment: "I am iron man",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
            {
                comment: "I am panda man",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
        ]
    },{
        id: 1,
        comment_by: {
            id: 9,
            username: "himanshu",
            profile_picture: null
        },
        comment: "YE EK PARENT COMMENT HAI",
        created_at: "2024-05-02T18:44:40.089Z",
        child_comments: [
            {
                comment: "YE EK CHILD COMMENT HAI",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
            {
                comment: "I am iron man",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
            {
                comment: "I am panda man",
                id: 1,
                comment_by: {
                    id: 5,
                    username: "AdiU",
                    profile_picture: null
                },
                created_at: "2024-05-02T18:45:05.155Z"
            },
        ]
    },
    ]); */

    console.log(comments);

    return (
        <div className="w-full bg-[#2a313d] text-white p-2 rounded-[10px]">
            <CommentBox postId={postId} />
            <CommentFeed postId={postId} comments={comments} setComments={setComments} />
        </div>
    )
}