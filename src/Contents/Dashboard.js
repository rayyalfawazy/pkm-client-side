import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const SingleProduct = ({nama, harga, berat, deskripsi}) => {
    return (
      <div className='border rounded-lg grid grid-cols-5'>
          <div className='bg-gray-500 rounded-l-lg'></div>
          <div className='m-5 col-span-4 space-y-3'>
              <h1 className='font-semibold text-2xl'>Nama</h1>
              <h2 className='font-semibold text-xl'>Rp.1,-</h2>
              <h2 className='font-semibold text-md text-gray-500'>Berat : 0 Kg</h2>
              <p>{deskripsi}</p>
              <div className='space-x-3'>
                <a className='bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 duration-150' href='/'>Edit Produk</a>
                <a className='bg-red-600 text-white p-3 rounded-lg hover:bg-red-500 duration-150' href='/'>Hapus Produk</a>
              </div>
          </div>
      </div>
    )
  }

function GetSampah() {
    return (
        <SingleProduct/>
    )
}

function GetProduct() {
    return (
        <SingleProduct/>
    )
}

function Dashboard() {
    const params = String(Object.values(useParams()))
    return (
        <div>
            <Navbar/>
            <div className='grid grid-cols-5 gap-10'>
                <div className='pl-10 pt-10 pr-10 pb-[700px] space-y-3 sticky'>
                    <div className='fixed'>                    
                        <h1 className='text-lg font-semibold border-b-2 border-gray-600'>Data Produk</h1>
                        <ul className='space-y-1'>
                            <li><a href='/dashboard/produk'>Produk Kerajinan</a></li>
                            <li><a href='/dashboard/sampah'>Produk Sampah</a></li>
                        </ul>
                    </div>
                </div>
                <div className=' col-span-4 pt-5 pb-16 pl-10'>
                    <div className='flex justify-between mr-60'>
                        <h1 className='text-2xl font-semibold'>Halaman Dashboard { params === 'sampah' ? "Produk Sampah" : "Produk Kerajinan" } </h1>
                        <a className='bg-green-600 text-white p-3 rounded-lg hover:bg-green-500 duration-150' href={`/dashboard/${params}/create`}>Tambah Produk</a>
                    </div>
                    <div className='mr-60 mt-5 space-y-3'>
                        { params === 'sampah' ? <GetSampah/> : <GetProduct/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard