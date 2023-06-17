import DokterNavbar from "components/DokterNavbar"
import DokterSidebar from "components/DokterSidebar"
import { Button, Label, Select, TextInput } from "flowbite-react"

function DokterSchedule() {
  return (
    <>
    <div className="w-full h-screen bg-gray-50 flex">
        <DokterSidebar />
        <div className="w-full ml-72 mr-4 py-4">
            <DokterNavbar />
            <div className="w-full bg-white rounded-xl shadow-sm p-6">
              <form action="" className="space-y-4">
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="day_start"
                      value="Start Day"
                    />
                  </div>
                  <Select
                    id="day_start"
                    required
                  >
                    <option>
                      Senin
                    </option>
                    <option>
                      Selasa
                    </option>
                    <option>
                      Rabu
                    </option>
                    <option>
                      Kamis
                    </option>
                  </Select>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="day_start"
                      value="End Day"
                    />
                  </div>
                  <Select
                    id="day_start"
                    required
                  >
                    <option>
                      Senin
                    </option>
                    <option>
                      Selasa
                    </option>
                    <option>
                      Rabu
                    </option>
                    <option>
                      Kamis
                    </option>
                  </Select>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="day_start"
                      value="Start Time"
                    />
                  </div>
                  <TextInput 
                    type="time"
                    
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="day_start"
                      value="End Time"
                    />
                  </div>
                  <TextInput 
                    type="time"
                    
                  />
                </div>

                <Button type="submit">Save</Button>
              </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default DokterSchedule