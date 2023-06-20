import React from 'react'

const data = [
    { no: 'REG.202306190001', nama: 'Ahmad Zainudin', phone: '087532634112', status: 'Waiting'},
    { no: 'REG.202306190002', nama: 'Subari Anwar', phone: '08754654112', status: 'Waiting'},
    { no: 'REG.202306190003', nama: 'Farhan Abas', phone: '08753356223', status: 'Waiting'},
    { no: 'REG.202306190004', nama: 'Alex', phone: '086375552345', status: 'Waiting'},
    { no: 'REG.202306190005', nama: 'Martin', phone: '08735426266', status: 'Waiting'},
    { no: 'REG.202306190006', nama: 'Fitra Ridwan', phone: '088863543535', status: 'Waiting'},
    { no: 'REG.202306190007', nama: 'Zainal Anwar', phone: '0896324325325', status: 'Waiting'},
    { no: 'REG.202306190008', nama: 'Anto Kusuma', phone: '08743256432', status: 'Waiting'},
    { no: 'REG.202306190009', nama: 'Kasim Hasbullah', phone: '088712344434', status: 'Waiting'},
    { no: 'REG.202306190010', nama: 'Ahmad Zainudin', phone: '08354632523', status: 'Waiting'},
    { no: 'REG.202306190011', nama: 'Ahmad Zainudin', phone: '086323252543', status: 'Waiting'},
    { no: 'REG.202306190012', nama: 'Ahmad Zainudin', phone: '087532634112', status: 'Waiting'},
    { no: 'REG.202306190013', nama: 'Ahmad Zainudin', phone: '087532634112', status: 'Waiting'},
    { no: 'REG.202306190014', nama: 'Ahmad Zainudin', phone: '087532634112', status: 'Waiting'},
    { no: 'REG.202306190015', nama: 'Ahmad Zainudin', phone: '087532634112', status: 'Waiting'},
]

export default function QueueTable() {
  return (
    <div>
        <div className="flex justify-between items-center">
            <div>Antrian Pasien</div>
            <div className="flex space-x-2 items-center">
                <label htmlFor="">Status: </label>
                <select name="" id="" className="w-full bg-white border border-gray-300 text-gray-900 rounded-md p-2.5">
                    <option value="">Waiting</option>
                    <option value="">All</option>
                    <option value="">Completed</option>
                </select>
            </div>
        </div>
        <table className="w-full mt-4">
            <thead className="bg-gray-50 border">
                <tr>
                    <th className="text-left text-gray-600 text-sm uppercase font-medium px-8 py-3">No Registrasi</th>
                    <th className="text-left text-gray-600 text-sm uppercase font-medium px-8 py-3">Nama Pasien</th>
                    <th className="text-left text-gray-600 text-sm uppercase font-medium px-8 py-3">Telepon</th>
                    <th className="text-gray-600 text-sm uppercase font-medium px-8 py-3">Status</th>
                    <th className="text-left text-gray-600 text-sm uppercase font-medium px-8 py-3">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                <tr className="border">
                    <td className="text-left text-sm font-medium px-8 py-4">{item.no}</td>
                    <td className="text-left text-sm font-medium px-8 py-4">{item.nama}</td>
                    <td className="text-left text-sm font-medium px-8 py-4">{item.phone}</td>
                    <td className="px-8 py-4">
                        <div className="flex justify-center pl-2">
                            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">{item.status}</span>
                        </div>
                    </td>
                    <td className="py-4">
                        <div className="flex justify-center -ml-4">
                        <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            className="text-blue-500"
                        >
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6z" />
                            <path
                                fillRule="evenodd"
                                d="M13.5 5a.5.5 0 01.5.5V7h1.5a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0V8h-1.5a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z"
                            />
                        </svg>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
