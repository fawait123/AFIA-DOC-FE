import AdminNavbar from 'components/AdminNavbar'
import AdminSidebar from 'components/AdminSidebar'
import AdminTableDokter from 'components/table/AdminTableDokter'

export default function AdminDokter() {
  return (
    <div className='w-full flex bg-gray-50'>
        <AdminSidebar/>
        <div className='w-full ml-72'>
            <AdminNavbar/>
            <AdminTableDokter/>
            {/* <AdminInput/> */}
        </div>
    </div>
  )
}
