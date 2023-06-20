import React from 'react'
import logo from '../../assets/logo.png';

export default function HeaderChat() {
  return (
    <div className="w-full flex justify-between items-center border-b bg-white px-4 py-2">
        <div className="flex items-center space-x-2">
            <div className="w-16 h-16">
                <img src={logo} alt="" />
            </div>
            <div className="block">
                <div className="text-lg font-semibold">
                    Nama Dokter
                </div>
            </div>
        </div>
        <div className="flex space-x-2">
            <div className="text-blue-500">

            </div>
        </div>
    </div>
  )
}
