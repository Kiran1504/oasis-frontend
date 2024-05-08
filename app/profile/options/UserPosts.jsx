import { useEffect, useState } from "react";
import axios from "axios";

export default function UserPosts({ posts}) {

    /* useEffect(() => {
        const updateUserPosts = async () => {
            console.log('updating user info');
            try {
                // Extract the user token from the cookie
                const token = localStorage.getItem('token');

                // Send the API request to update user posts
                const response = await axios.post('// hit like post end point', {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        // userInfo: ({...prevInfo, posts: posts }));
                    }
                });

                const updatedUserPosts = response.data.posts;
                setUserInfo(prevInfo => ({ ...prevInfo, posts: updatedUserPosts }));

            } catch (error) {
                console.log("Error occurred while updating user's posts: ", error);
            }
        };

        return () => {
            // Call the function to send the API request only on unmount
            updateUserPosts();
        };
    }, []); */

    const handleCreatePostClick = () => {
        // navigate('/Paste create post relative url here')
    }

    const handleDeletePost = () => {
        // pass in a post ID to the function
        // also take in a useState like post ID from the MainProfile and set it to this particular post's ID
        setConfirmDelete(true);
    }

    return (
        <div>
            <button onClick={handleCreatePostClick} className="p-2 border border-solid border-slate-400 bg-[#2a313d] font-[2rem] rounded-full">+ Create Post &nbsp;</button>
            {
                posts.map((post, index) => {

                    const [likedSVG, setLikedSVG] = useState((post.liked) ? true : false);
                    const [imageSrc, setImageSrc] = useState((post.liked) ? 'heart-solid.svg' : 'heart-regular.svg');

                    const handlePostLiked = () => {
                        setLikedSVG(liked => !liked);

                        if (!likedSVG) {
                            setImageSrc('heart-solid.svg');
                            posts[index].likes += 1;
                            posts[index].liked = true;
                        } else {
                            setImageSrc('heart-regular.svg');
                            posts[index].likes -= 1;
                            posts[index].liked = false;
                        }
                    }


                    return (
                        <div key={index} className="bg-[#2a313d] my-4 border border-solid border-slate-400 rounded-2xl py-4 px-6">
                            <section className="flex flex-row justify-between">
                                <h1 className="font-bold text-2xl">{post.title}</h1>
                                <button onClick={handleDeletePost}>
                                    <figure>
                                        <img src='/trash-solid.svg' width="20px" height="20px" className="mt-[3px]"></img>
                                    </figure>
                                </button>
                            </section>
                            <section className="my-4">{post.description}</section>
                            <section className="flex flex-row gap-5">
                                <div>
                                    <button onClick={handlePostLiked}>
                                        <figure className="flex flex-col items-center">
                                            <img src={imageSrc} className="w-[25px]"></img>
                                            <figcaption>{post.likes}</figcaption>
                                        </figure>
                                    </button>
                                </div>
                                <div>
                                    <figure className="flex flex-col items-center">
                                        <img src='/comment-regular.svg' className="w-[25px]"></img>
                                        <figcaption>{post.comments}</figcaption>
                                    </figure>
                                </div>
                                <div>
                                    <figure className="flex flex-col items-center">
                                        <img src='/share-solid.svg' className="w-[25px]"></img>
                                        <figcaption>{post.shares}</figcaption>
                                    </figure>
                                </div>
                            </section>
                        </div>
                    )
                })
            }
        </div>
    )
}
