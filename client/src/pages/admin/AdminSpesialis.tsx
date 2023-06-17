import AdminNavbar from 'components/AdminNavbar'
import AdminSidebar from 'components/AdminSidebar'
import AdminTableSpesialis from 'components/table/AdminTableSpesialis'

export default function AdminSpesialis() {
  return (
    <div className='w-full flex bg-gray-50'>
        <AdminSidebar/>
        <div className='w-full ml-72'>
            <AdminNavbar/>
            <AdminTableSpesialis/>
            {/* <AdminInput/> */}
        </div>
    </div>
  )
}
