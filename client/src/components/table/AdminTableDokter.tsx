import { Breadcrumb, Button, FileInput, Label, Modal, Select, Table, TextInput } from 'flowbite-react'
import React, { useState } from 'react'

// const tableContent = [
//     { no:1, name: 'Spesialis Jantung'},
//     { no:2, name: 'Spesialis Mata'},
//     { no:3, name: 'Spesialis Hidung'},
//     { no:4, name: 'Spesialis Penyakit Dalam'},
//     { no:5, name: 'Spesialis Kulit'},
//     { no:6, name: 'Spesialis Paru-paru'},
//     { no:7, name: 'Spesialis Ortopedi'},
//     { no:8, name: 'Spesialis Kelamin'},
//     { no:9, name: 'Spesialis Psikolog'},
//     { no:10, name: 'Spesialis Gigi'},
// ]

// const tableContent = [
//     {no: 1, name: 'Toney Strak', username: 'toney24', email: 'toney31@gmail.com'},
//     {no: 2, name: 'Steven Roge', username: 'steven_st', email: 'steven27@gmail.com'},
//     {no: 3, name: 'Bull Honer', username: 'bul_eyes', email: 'bull_honer@gmail.com'},
//     {no: 4, name: 'Robert Downgrade', username: 'robeerty', email: 'downgraderobert@gmail.com'},
//     {no: 5, name: 'Albert Enteng', username: 'albent44', email: 'alertpines@gmail.com'},
//     {no: 6, name: 'Chris Pratt', username: 'crhis19', email: 'pratee@gmail.com'},
//     {no: 7, name: 'Martin Oden', username: 'odenmartin88', email: 'oden_martin@gmail.com'},
//     {no: 8, name: 'Fix Amber', username: 'amberfix', email: 'amberfx@gmail.com'},
//     {no: 9, name: 'Martin Oden', username: 'odenmartin88', email: 'oden_martin@gmail.com'},
// ]

const tableContent = [
    {no: 1, name: 'Toney Strak', phone: '0823743212', email: 'toney31@gmail.com'},
    {no: 2, name: 'Steven Roge', phone: '08976211212', email: 'steven27@gmail.com'},
    {no: 3, name: 'Bull Honer', phone: '08673214632', email: 'bull_honer@gmail.com'},
    {no: 4, name: 'Robert Downgrade', phone: '0887353253', email: 'robet22@gmail.com'},
    {no: 5, name: 'Albert Enteng', phone: '086513473', email: 'alertpines@gmail.com'},
    {no: 6, name: 'Chris Pratt', phone: '08333313423', email: 'pratee@gmail.com'},
    {no: 7, name: 'Martin Oden', phone: '0856671324', email: 'oden_martin@gmail.com'},
    {no: 8, name: 'Fix Amber', phone: '08756412441', email: 'amberfx@gmail.com'},
    {no: 9, name: 'Martin Oden', phone: '0854132412', email: 'oden_martin@gmail.com'},
]

export default function AdminTableDokter() {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    
  return (
    <>
    <div className='py-4 px-16'>
        <div className='flex justify-between items-center'>
            <Breadcrumb aria-label="Default breadcrumb example">
                <Breadcrumb.Item
                    href="#"
                >
                    <p>
                    Home
                    </p>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Dokter
                </Breadcrumb.Item>
            </Breadcrumb>
            <button onClick={() => props.setOpenModal('pop-up')} className='flex bg-[#4650c0] rounded-lg text-white items-center space-x-2 px-4 py-2.5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <p className='text-sm'>Tambah Dokter</p>
            </button>
        </div>
        <div className='w-full bg-white border rounded-lg mt-4'>
            <div className='px-16 py-8 space-y-6'>
                <div className="grid grid-cols-8 text-lg font-semibold">
                    <div>
                        No
                    </div>
                    <div className='col-span-2'>
                        Name
                    </div>
                    <div className='col-span-2'>
                        Phone
                    </div>
                    <div className='col-span-2'>
                        Email
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="grid grid-cols-8 gap-8 text-gray-600 font-semibold">
                    {tableContent.map((item) => (
                    <>
                    <div>
                        {item.no}
                    </div>
                    <div className='-ml-1 col-span-2'>
                        {item.name}
                    </div>
                    <div className='-ml-2 col-span-2'>
                        {item.phone}
                    </div>
                    <div className='-ml-5 col-span-2'>
                        {item.email}
                    </div>
                    <div className='flex space-x-4'>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                        <button onClick={() => props.setOpenModal('pop-edit')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </div>
                    </>
                    ))}
                </div>
                <div className='flex justify-end py-6'>
                    asdsada
                </div>
            </div>
        </div>
    </div>
    <Modal show={props.openModal === 'pop-up'} size="auto" onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Tambah Dokter</Modal.Header>
        <Modal.Body>
            <div className='w-full'>
                <div className="grid grid-cols-2 gap-6">
                    <div className='space-y-2'>
                        <div className="grid grid-cols-3 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Name
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    placeholder="Andra Brewster"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Initial Degree
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    placeholder="S.Ked"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Final Degree
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    placeholder="Sp.KK"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Gender
                                </Label>
                                <Select
                                    id="countries"
                                    required
                                >
                                    <option>
                                    Laki-laki
                                    </option>
                                    <option>
                                    Perempuan
                                    </option>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Agama
                                </Label>
                                <Select
                                    id="countries"
                                    required
                                >
                                    <option>
                                    Islam
                                    </option>
                                    <option>
                                    Kristen
                                    </option>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Email
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    placeholder="email@example.com"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Phone
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    placeholder="086324553214"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="disabledInput1">
                                Photo
                            </Label>
                            <FileInput
                                id="file"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Tempat Lahir
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    placeholder="Yogyakarta"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Tanggal Lahir
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    placeholder="086324553214"
                                    className='w-full'
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Provinsi
                                </Label>
                                <Select
                                    id="countries"
                                    required
                                >
                                    <option>
                                    Yogyakarta
                                    </option>
                                    <option>
                                    Perempuan
                                    </option>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Kota/Kabupaten
                                </Label>
                                <Select
                                    id="countries"
                                    required
                                >
                                    <option>
                                    Sleman
                                    </option>
                                    <option>
                                    Perempuan
                                    </option>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Kecamatan
                                </Label>
                                <Select
                                    id="countries"
                                    required
                                >
                                    <option>
                                    Depok
                                    </option>
                                    <option>
                                    Perempuan
                                    </option>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Desa
                                </Label>
                                <Select
                                    id="countries"
                                    required
                                >
                                    <option>
                                    Caturtunggal
                                    </option>
                                    <option>
                                    Perempuan
                                    </option>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Rt
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    placeholder="19"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Rw
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    placeholder="08"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    NIK
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    placeholder="23123843567448"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    NIP
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    placeholder="84515363"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between pt-8'>
                <button onClick={() => props.setOpenModal(undefined)} className='flex bg-[#4650c0] rounded-lg text-white items-center space-x-2 px-4 py-2.5'>
                    Simpan
                </button>
                <button onClick={() => props.setOpenModal(undefined)} className='flex bg-white border rounded-lg items-center space-x-2 px-4 py-2.5'>
                    Batal
                </button>
            </div>
        </Modal.Body>
    </Modal>
    <Modal show={props.openModal === 'pop-edit'} size="auto" onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Edit Dokter</Modal.Header>
        <Modal.Body>
            <div className='w-full'>
                <div className="grid grid-cols-2 gap-6">
                    <div className='space-y-2'>
                        <div className="grid grid-cols-3 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Name
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    value="Andra Brewster"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Initial Degree
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    value="S.Ked"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Final Degree
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    value="Sp.KK"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Gender
                                </Label>
                                <Select
                                    id="countries"
                                    required
                                >
                                    <option>
                                    Laki-laki
                                    </option>
                                    <option>
                                    Perempuan
                                    </option>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Agama
                                </Label>
                                <Select
                                    id="countries"
                                    required
                                >
                                    <option>
                                    Islam
                                    </option>
                                    <option>
                                    Kristen
                                    </option>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Email
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    value="email@example.com"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Phone
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    value="086324553214"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="disabledInput1">
                                Photo
                            </Label>
                            <FileInput
                                id="file"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Tempat Lahir
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    value="Yogyakarta"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Tanggal Lahir
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    value="086324553214"
                                    className='w-full'
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Provinsi
                                </Label>
                                <Select
                                    id="countries"
                                    required
                                >
                                    <option>
                                    Yogyakarta
                                    </option>
                                    <option>
                                    Perempuan
                                    </option>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Kota/Kabupaten
                                </Label>
                                <Select
                                    id="countries"
                                    required
                                >
                                    <option>
                                    Sleman
                                    </option>
                                    <option>
                                    Perempuan
                                    </option>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Kecamatan
                                </Label>
                                <Select
                                    id="countries"
                                    required
                                >
                                    <option>
                                    Depok
                                    </option>
                                    <option>
                                    Perempuan
                                    </option>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Desa
                                </Label>
                                <Select
                                    id="countries"
                                    required
                                >
                                    <option>
                                    Caturtunggal
                                    </option>
                                    <option>
                                    Perempuan
                                    </option>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Rt
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    value="19"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    Rw
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    value="08"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="disabledInput1">
                                    NIK
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    value="23123843567448"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label htmlFor="disabledInput1">
                                    NIP
                                </Label>
                                <TextInput
                                    id="disabledInput1"
                                    value="84515363"
                                    className='w-full'
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between pt-8'>
                <button onClick={() => props.setOpenModal(undefined)} className='flex bg-[#4650c0] rounded-lg text-white items-center space-x-2 px-4 py-2.5'>
                    Simpan
                </button>
                <button onClick={() => props.setOpenModal(undefined)} className='flex bg-white border rounded-lg items-center space-x-2 px-4 py-2.5'>
                    Batal
                </button>
            </div>
        </Modal.Body>
    </Modal>
    </>
  )
}
