import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import CardCategory from 'components/card/CardCategory'
import React from 'react'

export default function Home() {
  return (
    <>
    <Navbar />
    <div className='bg-gray-100 w-full sm:h-[500px] py-3 px-4 sm:px-32'>
      <div className='hidden h-full sm:grid sm:grid-cols-2 gap-4'>
        <div className='bg-white rounded-lg h-full'>

        </div>
        <div className='grid grid-rows-2 gap-4'>
          <div className='bg-white rounded-lg h-full'>

          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-white rounded-lg h-full'>

            </div>
            <div className='bg-white rounded-lg h-full'>

            </div>
          </div>
        </div>
      </div>
      <div className='h-full w-full pb-6 sm:hidden'>
        <h4 className='text-2xl font-semibold mb-2'>Title</h4>
        <p className='text-sm leading-tight mb-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti sequi soluta saepe! Omnis quidem tempora beatae?
        </p>
        <div className='grid grid-cols-2 space-x-3'>
          <div className='bg-white rounded-lg h-36'>

          </div>
          <div className='bg-white rounded-lg h-36'>

          </div>
        </div>
      </div>
    </div>
    <div className='bg-white w-full py-4 px-4 sm:py-8 sm:px-32 space-y-4'>
      <span className='text-2xl font-semibold text-slate-800'>Layanan Kesehatan</span>
      <div className='bg-gray-100 w-full h-72 sm:h-auto rounded-lg'>
        <div className='grid grid-cols-10 gap-2'>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
        </div>
      </div>
      <div className='w-full space-y-4'>
        <div className='w-full flex justify-between items-center'>
          <div>
            <div className='text-2xl font-semibold'>Artikel</div>
          </div>
          <div>
            <div className='text-md font-medium text-red-600'>Lihat Semua</div>
          </div>
        </div>
        <div className='w-full grid sm:grid-cols-3 gap-4'>
          <div className='bg-gray-100 rounded-lg h-80 w-full'>

          </div>
          <div className='bg-gray-100 rounded-lg h-80 w-full'>

          </div>
          <div className='bg-gray-100 rounded-lg h-80 w-full'>

          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
