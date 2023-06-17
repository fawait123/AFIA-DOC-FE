import AdminInput from 'components/AdminInput'
import AdminNavbar from 'components/AdminNavbar'
import AdminSidebar from 'components/AdminSidebar'
import AdminTable from 'components/table/AdminTable'
import React from 'react'

export default function Admin() {
  return (
    <div className='w-full flex bg-gray-50'>
        <AdminSidebar/>
        <div className='w-full'>
            <AdminNavbar/>
            <AdminTable/>
            {/* <AdminInput/> */}
        </div>
    </div>
  )
}
