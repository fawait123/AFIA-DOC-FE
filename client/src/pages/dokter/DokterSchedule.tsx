import DokterNavbar from "components/DokterNavbar"
import DokterSidebar from "components/DokterSidebar"
import { Button, Label, Select, TextInput } from "flowbite-react"

function DokterSchedule() {
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
                <div className="w-full h-full bg-white rounded-lg shadow-sm p-8 overflow-hidden">
                  <form action="" className="space-y-8">
                    <div className="space-y-4">
                      <div className="space-y-4">
                        <label htmlFor="">Jam Opersional</label>
                        <div className="flex space-x-4">
                          <button className="w-8 h-8 rounded-full bg-gray-100">S</button>
                          <button className="w-8 h-8 rounded-full bg-red-100">S</button>
                          <button className="w-8 h-8 rounded-full bg-gray-100">R</button>
                          <button className="w-8 h-8 rounded-full bg-gray-100">K</button>
                          <button className="w-8 h-8 rounded-full bg-red-100">J</button>
                          <button className="w-8 h-8 rounded-full bg-red-100">S</button>
                          <button className="w-8 h-8 rounded-full bg-red-100">M</button>
                        </div>
                      </div>
                      <div className="w-1/2 bg-gray-50 rounded-md shadow-sm p-16 space-y-4">
                        <div  className="flex items-center space-x-4">
                          <label htmlFor="" className="w-56">Selasa</label>
                          <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                          <label htmlFor="">to</label>
                          <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div  className="flex items-center space-x-4">
                          <label htmlFor="" className="w-56">Jumat</label>
                          <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                          <label htmlFor="">to</label>
                          <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div  className="flex items-center space-x-4">
                          <label htmlFor="" className="w-56">Sabtu</label>
                          <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                          <label htmlFor="">to</label>
                          <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div  className="flex items-center space-x-4">
                          <label htmlFor="" className="w-56">Minggu</label>
                          <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                          <label htmlFor="">to</label>
                          <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <Button type="button" className="bg-gray-400 text-black">Cancel</Button>
                      <Button type="submit">Save</Button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="w-full h-full bg-gray-50 flex">
        <DokterSidebar />
        <div className="w-full ml-72 mr-4 py-4">
            <DokterNavbar />
            <div className="w-full bg-white rounded-xl shadow-sm p-6">
              <form action="" className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-4">
                    <label htmlFor="">Jam Opersional</label>
                    <div className="flex space-x-4">
                      <button className="w-8 h-8 rounded-full bg-gray-100">S</button>
                      <button className="w-8 h-8 rounded-full bg-red-100">S</button>
                      <button className="w-8 h-8 rounded-full bg-gray-100">R</button>
                      <button className="w-8 h-8 rounded-full bg-gray-100">K</button>
                      <button className="w-8 h-8 rounded-full bg-red-100">J</button>
                      <button className="w-8 h-8 rounded-full bg-red-100">S</button>
                      <button className="w-8 h-8 rounded-full bg-red-100">M</button>
                    </div>
                  </div>
                  <div className="w-1/2 bg-gray-50 rounded-md shadow-sm p-16 space-y-4">
                    <div  className="flex items-center space-x-4">
                      <label htmlFor="" className="w-56">Selasa</label>
                      <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                      <label htmlFor="">to</label>
                      <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <div  className="flex items-center space-x-4">
                      <label htmlFor="" className="w-56">Jumat</label>
                      <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                      <label htmlFor="">to</label>
                      <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <div  className="flex items-center space-x-4">
                      <label htmlFor="" className="w-56">Sabtu</label>
                      <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                      <label htmlFor="">to</label>
                      <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <div  className="flex items-center space-x-4">
                      <label htmlFor="" className="w-56">Minggu</label>
                      <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                      <label htmlFor="">to</label>
                      <input type="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button type="button" className="bg-gray-200 text-black">Cancel</Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </div>
        </div>
    </div> */}
    </>
  )
}

export default DokterSchedule