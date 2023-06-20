import { ArrowRightOnRectangleIcon, CalendarDaysIcon, ChatBubbleLeftIcon, HomeIcon, QueueListIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

export default function DokterSidebar() {
  return (
    <div className="w-full h-full">
        <div className="w-full h-full bg-white rounded-xl shadow-sm py-8 px-6 space-y-8">
            <div className="flex items-center space-x-2">
                <div>
                    <img src={logo} className='w-10 h-10' alt="afia-logo" />
                </div>
                <div>
                    <span className="text-xl sm:text-2xl font-semibold text-[#d92527]">AFIA</span>
                    <span className="text-xl sm:text-2xl font-semibold text-[#4650c0]">DOC</span>
                </div>
            </div>

            {/* menu */}
            <div>
                <ul className="space-y-3">
                    <li>
                        <NavLink
                            to="/dokter/dashboard"
                            className={({ isActive }) => (isActive ? 'flex px-2.5 py-3 space-x-2 bg-[#d92527] rounded-lg text-white' : 'flex px-2.5 py-3 space-x-2 hover:bg-[#d92527] hover:rounded-lg hover:text-white')}
                        >
                            <HomeIcon className="w-6" /> 
                            <span>
                                Dashboard
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dokter/schedule"
                            className={({ isActive }) => (isActive ? 'flex px-2.5 py-3 space-x-2 bg-[#d92527] rounded-lg text-white' : 'flex px-2.5 py-3 space-x-2 hover:bg-[#d92527] hover:rounded-lg hover:text-white')}
                        >
                            <CalendarDaysIcon className="w-6" /> 
                            <span>
                                Schedule
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dokter/queue"
                            className={({ isActive }) => (isActive ? 'flex px-2.5 py-3 space-x-2 bg-[#d92527] rounded-lg text-white' : 'flex px-2.5 py-3 space-x-2 hover:bg-[#d92527] hover:rounded-lg hover:text-white')}
                        >
                            <QueueListIcon className="w-6" /> 
                            <span>
                                Queue
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dokter/chat"
                            className={({ isActive }) => (isActive ? 'flex px-2.5 py-3 space-x-2 bg-[#d92527] rounded-lg text-white' : 'flex px-2.5 py-3 space-x-2 hover:bg-[#d92527] hover:rounded-lg hover:text-white')}
                        >
                            <ChatBubbleLeftIcon className="w-6" /> 
                            <span>
                                Chat
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <a 
                            href="/"
                            className="flex px-2.5 py-3 space-x-2 hover:bg-[#d92527] hover:rounded-lg hover:text-white"
                        >
                            <ArrowRightOnRectangleIcon className="w-6" /> 
                            <span>
                                Logout
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
