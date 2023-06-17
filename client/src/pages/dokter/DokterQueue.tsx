import DokterNavbar from "components/DokterNavbar"
import DokterSidebar from "components/DokterSidebar"
import { Button, Label, Select, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

function DokterQueue() {
  return (
    <>
    <div className="w-full h-screen bg-gray-50 flex">
        <DokterSidebar />
        <div className="w-full ml-72 mr-4 py-4">
            <DokterNavbar />
            <div className="w-full bg-white rounded-xl shadow-sm p-6">
                <table className="w-full">
                    <thead className="text-slate-500">
                        <tr>
                            <th className="font-semibold text-sm text-left">No Registrasi</th>
                            <th className="font-semibold text-sm text-left">Nama Pasien</th>
                            <th className="font-semibold text-sm text-left">Status</th>
                            <th className="font-semibold text-sm text-left">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-4">REG.20023812434</td>
                            <td className="py-4">Rahman Farhan</td>
                            <td className="py-4">Waiting</td>
                            <td className="py-4">
                                <Link to="tindakan">Tindakan</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4">REG.20023812434</td>
                            <td className="py-4">Rahman Farhan</td>
                            <td className="py-4">Waiting</td>
                            <td className="py-4">
                                <Link to="tindakan">Tindakan</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4">REG.20023812434</td>
                            <td className="py-4">Rahman Farhan</td>
                            <td className="py-4">Waiting</td>
                            <td className="py-4">
                                <Link to="tindakan">Tindakan</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4">REG.20023812434</td>
                            <td className="py-4">Rahman Farhan</td>
                            <td className="py-4">Waiting</td>
                            <td className="py-4">
                                <Link to="tindakan">Tindakan</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4">REG.20023812434</td>
                            <td className="py-4">Rahman Farhan</td>
                            <td className="py-4">Waiting</td>
                            <td className="py-4">
                                <Link to="tindakan">Tindakan</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4">REG.20023812434</td>
                            <td className="py-4">Rahman Farhan</td>
                            <td className="py-4">Waiting</td>
                            <td className="py-4">
                                <Link to="tindakan">Tindakan</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4">REG.20023812434</td>
                            <td className="py-4">Rahman Farhan</td>
                            <td className="py-4">Waiting</td>
                            <td className="py-4">
                                <Link to="tindakan">Tindakan</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4">REG.20023812434</td>
                            <td className="py-4">Rahman Farhan</td>
                            <td className="py-4">Waiting</td>
                            <td className="py-4">
                                <Link to="tindakan">Tindakan</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4">REG.20023812434</td>
                            <td className="py-4">Rahman Farhan</td>
                            <td className="py-4">Waiting</td>
                            <td className="py-4">
                                <Link to="tindakan">Tindakan</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default DokterQueue