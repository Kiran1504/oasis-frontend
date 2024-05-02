import ReactPlayer from "react-player";

export default function PostCard({ loadMedia, likedState, followingState, post, isActive, muted, setMuted, postRef, playerRef }) {
    const toggleMute = () => {
        setMuted(prevMuted => !prevMuted);
    }

    return (
        <div ref={postRef} className="lazy-post-card">
            <div className="my-[1rem] px-[2rem] text-white flex flex-col w-[70%] min-h-[100px] rounded-[15px] bg-[#2a313d]">
                <section>
                    <div className="mt-[1rem] grid grid-cols-12 items-center">
                        <div className="col-span-2 rounded-full overflow-hidden w-[50px] h-[50px] border border-solid border-white">
                            <figure className="w-full h-full">
                                {
                                    loadMedia && post.user.profile_picture ? (
                                        <img src={post.user.profile_picture} className="w-full h-full object-cover" alt="Profile Picture"></img>
                                    )
                                        :
                                        (
                                            <img src='/github.svg' className="w-full h-full object-cover" alt="Profile Picture"></img>
                                        )
                                }
                            </figure>
                        </div>
                        <div className="col-span-6 text-md flex flex-col justify-center">
                            <div className="font-bold">{post.user.username}</div>
                            <div className="text-sm"><i>@{post.community.name}</i></div>
                        </div>
                        <div className="col-span-3 flex flex-col items-center text-[1rem]">
                            {
                                !followingState && (
                                    <button className="m-2 p-2 px-3 min-w-[75px] border border-solid border-blue-500 rounded-[5px]">Follow&nbsp;+</button>
                                )
                            }
                        </div>
                        <div className="col-span-1 flex flex-row justify-end">
                            <button>
                                <figure>
                                    <img src='/ellipsis-vertical-solid.svg' width="7px" height="12px"></img>
                                </figure>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="my-[10px]">
                    <div className="text-[0.75rem]">{post.title}</div>
                    <div className="text-[0.75rem]">{post.body}</div>
                </section>
                <section>
                    {
                        loadMedia && post.media_type ? (
                            <div className="rounded-[10px] w-full min-h-[50px] overflow-hidden">
                                {
                                    post.media_type === 'video' ? (
                                        <div>
                                            <div>
                                                <button onClick={(e) => { e.stopPropagation(); toggleMute(); }}>{muted ? 'Unmute' : 'Mute'}</button>
                                            </div>
                                            <ReactPlayer id="post-video-player"
                                                ref={playerRef}
                                                controls
                                                url={post.media}
                                                width="100%"
                                                height="100%"
                                                muted={muted}
                                                playing={isActive}
                                            />
                                        </div>
                                    )
                                        : (
                                            <figure className="w-full h-full">
                                                <img src={post.media} className="object-cover" width="100%" height="100%"></img>
                                            </figure>
                                        )
                                }
                            </div>
                        )
                            : (
                                <div className="w-full h-full bg-gray-300 animate-pulse" />
                            )
                    }
                </section>
                <section className="mt-[20px] mb-[10px] w-full">
                    <div className="flex flex-row gap-6">
                        <div className="flex flex-col items-center">
                            <figure>
                                <img src={likedState ? '/heart-solid.svg' : '/heart-regular.svg'} width="25px"></img>
                            </figure>
                            <figcaption>{post.likes}</figcaption>
                        </div>
                        <div className="flex flex-col">
                            <figure>
                                <img src='/comment-regular.svg' width="25px"></img>
                            </figure>
                            <figcaption>{post.comments}</figcaption>
                        </div>
                        <div className="flex flex-col">
                            <figure>
                                <img src='/share-solid.svg' width="25px"></img>
                            </figure>
                            <figcaption>{post.shares}</figcaption>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}