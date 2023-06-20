import DokterNavbar from 'components/DokterNavbar'
import DokterSidebar from 'components/DokterSidebar'
import Chat from './Chat'

export default function DokterChat() {
  return (
    <>
    <div className="w-full grid grid-cols-12">
        <div className="col-span-3">
            <div className="w-full h-screen p-4">
                <DokterSidebar />
            </div>
        </div>
        <div className="col-span-9">
            <div className="w-full h-screen p-4">
                <div className="w-full h-full bg-white rounded-lg shadow-sm">
                    <Chat />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
