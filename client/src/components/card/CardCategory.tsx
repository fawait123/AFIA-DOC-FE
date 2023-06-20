import logo from '../../assets/logo.png'

export default function CardCategory() {
  return (
    <div className='w-fit px-4 py-2 grid grid-cols-1 place-content-center'>
        <div className='w-20 -ml-2'>
            <img src={logo} alt="" />
        </div>
        <div className='-space-y-1 text-sm'>
            <div className='flex justify-center'>
                Layanan
            </div>
            <div className='flex justify-center'>
                Bidan
            </div>
        </div>
    </div>
  )
}
