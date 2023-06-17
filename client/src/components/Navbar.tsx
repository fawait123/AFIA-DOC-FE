import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from 'assets/logo.png'
import Auth from './modal/Auth'

const navigation = [
  { name: 'Beranda', href: '#', current: true },
  { name: 'Artikel', href: '#', current: false },
  { name: 'Riwayat', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
  

export default function Navbar() {
  
  const [showLogin, setLogin] = useState(false)

  const handleOnClose = () => setLogin(false)

  return (
    <>
    <Disclosure as="nav" className="bg-white shadow-sm border-b">
      {({ open }) => (
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-24">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center ml-12 sm:-ml-4 sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center space-x-1">
                            <img
                                className="block h-8 w-auto lg:hidden"
                                src={logo}
                                alt="Your Company"
                            />
                            <img
                                className="hidden h-12 w-auto lg:block"
                                src={logo}
                                alt="Your Company"
                            />
                            <div className="flex space-x-1">
                                <span className="text-xl sm:text-2xl font-semibold text-[#d92527]">AFIA</span>
                                <span className="text-xl sm:text-2xl font-semibold text-[#4650c0]">DOC</span>
                            </div>
                        </div>
                        <div className="hidden sm:ml-16 sm:block">
                            <div className="flex space-x-3">
                                {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                    item.current ? 'text-[#d92527]' : 'hover:text-[#d92527]',
                                    'rounded-md px-3 py-4 text-lg'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-0 sm:pr-1">
                        <button
                        type="button"
                        onClick={() => setLogin(true)}
                        className="focus:outline-none rounded-md text-white bg-red-600 py-1 px-2 sm:py-1.5 sm:px-4 hover:bg-red-700"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden h-screen">
                <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                    <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-white text-[#d92527]' : 'hover:text-[#d92527]',
                        'block px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                    {item.name}
                    </Disclosure.Button>
                ))}
                </div>
            </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    <Auth visible={showLogin} onClose={handleOnClose}/>
    </>
  )
}
