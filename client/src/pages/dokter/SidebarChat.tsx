import React from 'react'
import logo from '../../assets/logo.png';

export default function SidebarChat() {
  return (
    <div className="w-full h-full border-r shadow-sm">
      <div className="grid grid-cols-12 gap-1 place-content-center p-4">
        <div className="col-span-3 flex justify-center items-center">
          <div className="w-12 h-12 rounded-full bg-blue-200 flex justify-center items-center text-white text-2xl font-semibold">A</div>
        </div>
        <div className="col-span-6 flex flex-col items-center -space-y-1 py-2">
          <div className="text-left font-semibold">
            Nama Dokter
          </div>
          <div className="text-left text-sm -ml-[12px] text-gray-400">
            Dokter Pasien
          </div>
        </div>
        <div className="col-span-3 flex justify-center items-center">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1.5em"
          width="1.5em"
          className="text-blue-700"
        >
          <path d="M2.344 15.271l2 3.46a1 1 0 001.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 001 1h4a1 1 0 001-1v-1.598a8.094 8.094 0 001.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 00-.365-1.366l-1.372-.793a7.683 7.683 0 00-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 00-1.366-.365l-1.396.806A8.034 8.034 0 0015 4.598V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v1.598A8.094 8.094 0 007.105 5.71L5.71 4.904a.999.999 0 00-1.366.365l-2 3.46a1.004 1.004 0 00.365 1.366l1.372.793a7.683 7.683 0 000 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z" />
        </svg>
        </div>
      </div>
      <div className="text-2xl font-semibold px-4 py-2">Chats</div>
      <div className="space-y-2 px-4">
        <div className="flex bg-blue-50 rounded-lg py-1 items-center space-x-2">
          <div className="w-14 h-14 rounded-full">
            <img src={logo} alt="" />
          </div>
          <div className="block -space-y-1">
            <div className="text-lg font-semibold">
              Nama User
            </div>
            <div className="text-gray-700">
              Lorem ipsum d...
            </div>
          </div>
        </div>
        <div className="flex py-1 items-center space-x-2">
          <div className="w-14 h-14 rounded-full">
            <img src={logo} alt="" />
          </div>
          <div className="block -space-y-1">
            <div className="text-lg font-semibold">
              Nama User
            </div>
            <div className="text-gray-700">
              Lorem ipsum d...
            </div>
          </div>
        </div>
        <div className="flex py-1 items-center space-x-2">
          <div className="w-14 h-14 rounded-full">
            <img src={logo} alt="" />
          </div>
          <div className="block -space-y-1">
            <div className="text-lg font-semibold">
              Nama User
            </div>
            <div className="text-gray-700">
              Lorem ipsum d...
            </div>
          </div>
        </div>
        <div className="flex py-1 items-center space-x-2">
          <div className="w-14 h-14 rounded-full">
            <img src={logo} alt="" />
          </div>
          <div className="block -space-y-1">
            <div className="text-lg font-semibold">
              Nama User
            </div>
            <div className="text-gray-700">
              Lorem ipsum d...
            </div>
          </div>
        </div>
        <div className="flex py-1 items-center space-x-2">
          <div className="w-14 h-14 rounded-full">
            <img src={logo} alt="" />
          </div>
          <div className="block -space-y-1">
            <div className="text-lg font-semibold">
              Nama User
            </div>
            <div className="text-gray-700">
              Lorem ipsum d...
            </div>
          </div>
        </div>
        <div className="flex py-1 items-center space-x-2">
          <div className="w-14 h-14 rounded-full">
            <img src={logo} alt="" />
          </div>
          <div className="block -space-y-1">
            <div className="text-lg font-semibold">
              Nama User
            </div>
            <div className="text-gray-700">
              Lorem ipsum d...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
