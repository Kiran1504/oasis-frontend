"use client"

import CreatPost from "./create-post/CreatePost"
import GlobalFeed from "./global-feed/GlobalFeed"

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3"></div>
      <div className="col-span-5">
        <GlobalFeed />
      </div>
      <div className="col-span-4"></div>
    </div>
  )
}