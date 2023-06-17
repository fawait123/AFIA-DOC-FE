import AdminNavbar from 'components/AdminNavbar'
import AdminSidebar from 'components/AdminSidebar'
import AdminTableUser from 'components/table/AdminTableUser'

export default function AdminUser() {
  return (
    <div className='w-full flex bg-gray-50'>
        <AdminSidebar/>
        <div className='w-full ml-72'>
            <AdminNavbar/>
            <AdminTableUser/>
            {/* <AdminInput/> */}
        </div>
    </div>
  )
}
