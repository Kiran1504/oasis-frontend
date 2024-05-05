"use client";

import { useEffect, useState } from "react";
//import { useRouter } from "next/router";
import axios from "axios";

import PostCard from "./PostCard";
import CommentSection from "./comment-section/CommentSection";

export default function ViewPost() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  //const router = useRouter();

  //const { pid: postId } = router.query;

  const postId = localStorage.getItem('postId');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(
          `http://3.110.161.150:4000/post/v2?id=${postId}`,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        console.log('successfully fetched post data');
        setPost(data);
        setComments(data.comments);

      } catch (error) {
        console.error("Error occurred while fetching post state:", error);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  return (
    <div>
      {post ? <PostCard post={post} /> : <div>Loading...</div>}
      {post ? (
        <CommentSection postId={postId} comments={comments} setComments={setComments} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
