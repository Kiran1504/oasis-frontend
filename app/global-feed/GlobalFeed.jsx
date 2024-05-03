import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "./Post";

export default function GlobalFeed() {
    const [posts, setPosts] = useState([]);
    const [activeVideoId, setActiveVideoId] = useState(null);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://3.110.161.150:4000/feed/global');
                setPosts(response.data);
            } catch (error) {
                console.warn('Error occurred in fetching posts: ', error);
            }
        };

        fetchPosts();

        return () => {
            // Cleanup
            setPosts([]);
        };
    }, []);

    return (
        <div>
            {posts.map((post, index) => (
                <Posts key={index} post={post} isActive={post.id === activeVideoId} setActiveVideoId={setActiveVideoId} muted={muted} setMuted={setMuted} />
            ))}
        </div>
    );
}