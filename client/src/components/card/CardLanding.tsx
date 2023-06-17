import React from 'react'
import image from '../../assets/landing.png'

export default function CardLanding() {
  return (
    <div className='grid grid-rows-2 gap-1 content-center'>
        <div className='border border-black rounded-md py-2 bg-white space-y-2'>
            <div className='flex justify-center w-full'>
                <img 
                src={image} 
                className='rounded-full h-16 w-16'
                alt="icon" />
            </div>
            <div className='flex justify-center w-full'>
                <h5 className="text-lg font-medium tracking-tight text-gray-900">
                    <p>
                        Ambulance
                    </p>
                </h5>
            </div>
        </div>
    </div>
  )
}

