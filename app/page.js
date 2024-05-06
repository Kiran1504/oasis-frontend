"use client"

import GlobalFeed from "./global-feed/GlobalFeed"
export default function Home() {

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3"></div>
      <div className="col-span-6">
        <GlobalFeed />
      </div>
      <div className="col-span-3"></div>
    </div>
  )
}