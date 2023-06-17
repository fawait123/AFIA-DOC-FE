import { Breadcrumb } from 'flowbite-react'
import React from 'react'

export default function AdminInput() {
  return (
    <div className='py-4 px-16'>
        <div className='flex justify-between items-center'>
            <Breadcrumb aria-label="Default breadcrumb example">
                <Breadcrumb.Item
                    href="#"
                >
                    <p>
                    Home
                    </p>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Spesialis
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Tambah
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div className='w-full bg-white border rounded-lg mt-4'>
            <div className='px-16 py-8 space-y-6'>
                
            </div>
        </div>
    </div>
  )
}
