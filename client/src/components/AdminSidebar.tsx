import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function AdminSidebar() {
  return (
    <>
    <div className='fixed bg-white w-80 h-screen p-8'>
        <div className='flex items-center space-x-2'>
            <div>
                <img src={logo} className='w-10 h-10' alt="afia-logo" />
            </div>
            <div>
                <span className="text-xl sm:text-2xl font-semibold text-[#d92527]">AFIA</span>
                <span className="text-xl sm:text-2xl font-semibold text-[#4650c0]">DOC</span>
            </div>
        </div>
        <div className='space-y-2 py-8'>
            <NavLink 
                to={'/admin/dashboard'} 
                className={({ isActive }) => (isActive ? 'flex space-x-3 bg-indigo-600 text-white rounded-xl py-4 px-2 hover:bg-gray-50 hover:rounded-xl hover:cursor-pointer' : 'flex space-x-3 text-gray-600 py-4 px-2 hover:bg-gray-50 hover:rounded-xl hover:cursor-pointer')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
                <p className='font-semibold'>Dashboard</p>
            </NavLink>
            <NavLink 
                to={'/admin/spesialis'} 
                className={({ isActive }) => (isActive ? 'flex space-x-3 bg-indigo-600 text-white rounded-xl py-4 px-2 hover:bg-gray-50 hover:rounded-xl hover:cursor-pointer' : 'flex space-x-3 text-gray-600 py-4 px-2 hover:bg-gray-50 hover:rounded-xl hover:cursor-pointer')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
                <p className='font-semibold'>Spesialis</p>
            </NavLink>
            <NavLink 
                to={'/admin/dokter'} 
                className={({ isActive }) => (isActive ? 'flex space-x-3 bg-indigo-600 text-white rounded-xl py-4 px-2 hover:bg-gray-50 hover:rounded-xl hover:cursor-pointer' : 'flex space-x-3 text-gray-600 py-4 px-2 hover:bg-gray-50 hover:rounded-xl hover:cursor-pointer')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <p className='font-semibold'>Dokter</p>
            </NavLink>
            <NavLink 
                to={'/admin/user'} 
                className={({ isActive }) => (isActive ? 'flex space-x-3 bg-indigo-600 text-white rounded-xl py-4 px-2 hover:bg-gray-50 hover:rounded-xl hover:cursor-pointer' : 'flex space-x-3 text-gray-600 py-4 px-2 hover:bg-gray-50 hover:rounded-xl hover:cursor-pointer')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
                <p className='font-semibold'>User</p>
            </NavLink>
        </div>
    </div>
    </>
  )
}


