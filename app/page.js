"use client"
import GlobalFeed from "./global-feed/GlobalFeed"

import ViewPost from "./post-card/ViewPost"
import CommentSection from "./post-card/comment-section/CommentSection"
import GifPicker from 'gif-picker-react';
export default function Home() {

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3"></div>
      <div className="col-span-5">
        <GlobalFeed />
        <div className="h-[200px]"></div>
      </div>
      <div className="col-span-4"></div>
    </div>
  )
}