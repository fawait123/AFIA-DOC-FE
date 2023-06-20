import React from 'react'
import SidebarChat from './SidebarChat'
import MainChat from './MainChat'

export default function Chat() {
  return (
    <>
    <div className="w-full h-full grid grid-cols-12 rounded-lg shadow-sm border border-white">
      <div className="col-span-4">
        <SidebarChat />
      </div>
      <div className="col-span-8 bg-gray-50">
        <MainChat />
      </div>
    </div>
    </>
  )
}
