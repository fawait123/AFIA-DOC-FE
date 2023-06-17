import AdminNavbar from 'components/AdminNavbar'
import AdminSidebar from 'components/AdminSidebar'

export default function AdminDashboard() {
  return (
    <div className='w-full flex bg-gray-50'>
        <AdminSidebar/>
        <div className='w-full ml-72'>
            <AdminNavbar/>
        </div>
    </div>
  )
}
