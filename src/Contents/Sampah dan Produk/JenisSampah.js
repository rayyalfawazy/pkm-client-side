import React from 'react'
import Navbar from '../../Components/Navbar'
import { Helmet } from 'react-helmet'

function JenisSampah() {
  return (
    <div>
        <Helmet>
            <title>Title | Sampah</title>
        </Helmet>
        <Navbar/>
        <div className='px-60 my-3'>
            <div className='shadow-xl'>
                <h1 className='p-5 text-center text-2xl font-semibold'>Jenis Sampah</h1>
                <div className='border-b-2'></div>
                <ul className='p-10 grid grid-cols-3 gap-10'>
                    <li className='bg-gray-300 py-10 text-center rounded-lg drop-shadow-md hover:drop-shadow-xl duration-150'><a href='/sampah/plastik'>Plastik</a></li>
                    <li className='bg-gray-300 py-10 text-center rounded-lg drop-shadow-md hover:drop-shadow-xl duration-150'><a href='/sampah/kaca'>Kaca</a></li>
                    <li className='bg-gray-300 py-10 text-center rounded-lg drop-shadow-md hover:drop-shadow-xl duration-150'><a href='/sampah/kertas'>Kertas</a></li>
                    <li className='bg-gray-300 py-10 text-center rounded-lg drop-shadow-md hover:drop-shadow-xl duration-150'><a href='/sampah/kaleng'>Kaleng</a></li>
                    <li className='bg-gray-300 py-10 text-center rounded-lg drop-shadow-md hover:drop-shadow-xl duration-150'><a href='/sampah/limbahelektonik'>Limbah</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default JenisSampah