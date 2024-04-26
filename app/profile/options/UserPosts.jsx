import { useEffect, useState } from "react";
import axios from "axios";

export default function UserPosts({ posts, setConfirmDelete }) {

    const updatedPosts = [...posts];

    useEffect(() => {

        const updateUserPosts = async () => {
            try {
                //Extract the user token from the cookie

                //just send posts: updatedPosts
                await axios.post('// hit api end point', {
                    headers: {
                        // 'Authorization': token,
                        // 'Content-Type': 'application/json'
                    }
                });

            }
            catch (error) {
                console.log("error occured while updating user's posts: ", error);
            }
        }

        return () => {
            console.log('sending')
            updateUserPosts();
        }

    }, [])

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
                            updatedPosts[index].likes += 1;
                        } else {
                            setImageSrc('heart-regular.svg');
                            updatedPosts[index].likes -= 1;
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
