"use client"

import GlobalFeed from "./global-feed/GlobalFeed"
import UpdateEventPage from "./update/event/page"
export default function Home() {

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2"></div>
      <div className="col-span-8">
        <UpdateEventPage />
      </div>
      <div className="col-span-2"></div>
    </div>
  )
}