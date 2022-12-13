import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar'

export default function Pembukuan() {
    const params = String(Object.values(useParams()))
  return (
    <div>
        <Navbar/>
        <div className='grid grid-cols-5 gap-10'>
            <div className='pl-10 pt-10 pr-10 h-16 space-y-3 sticky top-20'>
                <div>                    
                    <h1 className='text-lg font-semibold border-b-2 border-gray-600'>Data Produk</h1>
                    <ul className='space-y-1'>
                        <li><a className={params === 'produk' ? 'text-red-600 border-l-8 border-red-400' : ''} href='/dashboard/produk'>Produk Kerajinan</a></li>
                        <li><a className={params === 'sampah' ? 'text-red-600 border-l-8 border-red-400' : ''} href='/dashboard/sampah'>Produk Sampah</a></li>
                    </ul>
                </div>
                <div>                    
                    <h1 className='text-lg font-semibold border-b-2 border-gray-600'>Pembukuan</h1>
                    <ul className='space-y-1'>
                        <li><a className='' href='/dashboard/pembukuan'>Pembukuan</a></li>
                        <li><a className='' href=''>Catat Pembukuan</a></li>
                    </ul>
                </div>
            </div>
            <div className=' col-span-4 pt-5 pb-16 pl-10'>
                <div className='flex justify-between mr-60'>
                    <h1 className='text-2xl font-semibold'>Halaman Dashboard Pembukuan </h1>
                    {/* <a className='bg-green-600 text-white p-3 rounded-lg hover:bg-green-500 duration-150' href={`/dashboard/${params}/create`}>Tambah { params === 'sampah' ? "Sampah" : "Produk"}</a> */}
                </div>
                <div className='mr-60 mt-5 space-y-3'>
                    <table className='w-full'>
                        <tr>
                            <th className='border border-slate-300 px-3 py-2 text-left bg-slate-600 text-white'>No.</th>
                            <th className='border border-slate-300 px-3 py-2 text-left bg-slate-600 text-white'>Nama Member</th>
                            <th className='border border-slate-300 px-3 py-2 text-left bg-slate-600 text-white'>Tanggal Penjualan</th>
                            <th className='border border-slate-300 px-3 py-2 text-left bg-slate-600 text-white'>Jenis Barang</th>
                            <th className='border border-slate-300 px-3 py-2 text-left bg-slate-600 text-white'>Total Penjualan</th>
                        </tr>
                        <tr>
                            <td className='border border-slate-300 px-3 bg-slate-100'>1</td>
                            <td className='border border-slate-300 px-3 bg-slate-100'>Ali</td>
                            <td className='border border-slate-300 px-3 bg-slate-100'>1-Jan-2000</td>
                            <td className='border border-slate-300 px-3 bg-slate-100'>Plastik</td>
                            <td className='border border-slate-300 px-3 bg-slate-100'>107</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
