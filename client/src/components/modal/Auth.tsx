import { XMarkIcon } from '@heroicons/react/24/outline';
import LoginForm from 'components/form/LoginForm';
import RegisterForm from 'components/form/RegisterForm';
import React, { useState } from 'react'

interface AuthProps {
    visible: boolean;
    onClose: () => void;
}

export default function Auth({ visible, onClose }: AuthProps) {

  const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'container') onClose();
  }

  const [isRegister, setRegister] = useState(false)

  if (!visible) return null

  return (
    <div 
      id="container"
      onClick={handleOnClose} 
      className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center">
        <div className="bg-white rounded-lg w-1/3 h-screen sm:h-auto">
            <div className="flex justify-end">
                <button onClick={onClose} type="button" className="p-4">
                    <XMarkIcon className="block h-6 w-6"/>
                </button>
            </div>
            <LoginForm visible={!isRegister}/>
            <RegisterForm visible={isRegister}/>
            <div>
                <p className="py-4 text-center text-sm text-gray-500">
                    Tidak punya akun?{' '}
                    <button  
                    onClick={() => setRegister(!isRegister)}
                    type="button" 
                    className="font-semibold leading-6 text-[#4650c0] hover:text-[#4650c0]">
                    {!isRegister ? 'daftar' : 'masuk'}
                    </button>
                </p>
            </div>
        </div>
    </div>
  )
}
