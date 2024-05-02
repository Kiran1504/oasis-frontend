import PostCard from "./PostCard";

import { useEffect, useRef, useState } from "react";

export default function Post({ post, isActive, setActiveVideoId, muted, setMuted }) {
    const [likedState, setLikedState] = useState(null);
    const [followingState, setFollowingState] = useState(null);
    const postRef = useRef(null);
    const playerRef = useRef();

    const [loadMedia, setLoadMedia] = useState(false);

    useEffect(() => {
        const fetchPostState = async () => {
            try {
                const token = localStorage.getItem('token')
                const response = await axios.get(`http://3.110.161.150:4000/post/state?id=${post.id}`, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                });

                setLikedState(response.data.isLiked);
                setFollowingState(response.data.isFollowing);
            } catch (error) {
                console.log('Error occurred while fetching post state: ', error);
            }
        };

        const handleScroll = () => {
            if (postRef.current) {
                const viewPortCenter = window.innerHeight / 2;
                const postRect = postRef.current.getBoundingClientRect();

                if (postRect.top < viewPortCenter && viewPortCenter < postRect.bottom) {
                    setActiveVideoId(post.id);
                }
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !loadMedia) {
                    setLoadMedia(true);
                    fetchPostState();
                    handleScroll(); // Update active video when post enters view
                }
            });
        }, { threshold: 0.1, root: null, rootMargin: '500px' });

        window.addEventListener("scroll", handleScroll);
        if (postRef.current) {
            observer.observe(postRef.current);
        }

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loadMedia]);

    useEffect(() => {
        if (!isActive) {
            playerRef.current?.getInternalPlayer()?.pause();
        }
    }, [isActive]);


    return (
        <PostCard loadMedia={loadMedia} likedState={likedState} followingState={followingState} post={post} isActive={isActive} muted={muted} setMuted={setMuted} postRef={postRef} playerRef={playerRef} />
    )
}
    