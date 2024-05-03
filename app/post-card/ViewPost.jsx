import { useEffect } from "react";
import PostCard from "./PostCard";
import CommentSection from "./comment-section/CommentSection"

import { useLocation } from "react-router-dom"
import { useCallback, useState } from "react";
import axios from "axios";

export default function ViewPost() {
    console.log('in view-post')
    const location = useLocation();
    const postId = location.pathname.split('/').pop();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);

    console.log('rendered-view-post')

    const fetchPost = useCallback(async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://3.110.161.150:4000/post/v2?id=${postId}`, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            });
            setPost(response.data);
            setComments(response.data.comments);
        } catch (error) {
            console.log('Error occurred while fetching post state: ', error);
        }
    }, [postId]);

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    return (
        <div>
            {post ? <PostCard post={post} /> : <div>Loading...</div>}
            {post ? <CommentSection postId={postId} comments={comments} setComments={setComments}  /> : <div>Loading...</div>}
        </div>
    )
}