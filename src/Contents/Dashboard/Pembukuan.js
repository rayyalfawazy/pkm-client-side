import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, json } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import axios from 'axios';

export default function Pembukuan() {
    const [pembukuan, setPembukuan] = useState([])
    const [jumlahPenjualan, setJumlahPenjualan] = useState()
    const params = String(Object.values(useParams()))
    const fetchData = async() => {
        const response = await axios.get('http://localhost:5000/pembukuan')
        setPembukuan(response.data)
    }
    useEffect(()=>{
        fetchData()
    },[])

    
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
                </div>
                <div className='mr-60 mt-5 space-y-3'>
                    <table className='w-full'>
                        <tr>
                            <th className='border border-slate-300 px-3 py-2 text-left bg-slate-600 text-white'>No.</th>
                            <th className='border border-slate-300 px-3 py-2 text-left bg-slate-600 text-white'>Nama Member</th>
                            <th className='border border-slate-300 px-3 py-2 text-left bg-slate-600 text-white'>Tanggal Penjualan</th>
                            <th className='border border-slate-300 px-3 py-2 text-left bg-slate-600 text-white'>Ketegori Penjualan</th>
                            <th className='border border-slate-300 px-3 py-2 text-left bg-slate-600 text-white'>Jenis Sampah</th>
                            <th className='border border-slate-300 px-3 py-2 text-left bg-slate-600 text-white'>Total Penjualan</th>
                            <th className='border border-slate-300 px-3 py-2 text-left bg-slate-600 text-white'>Action</th>
                        </tr>
                        {pembukuan.map((pmb, i) => (
                            <tr>
                                <td className='border border-slate-300 px-3 bg-slate-100'>{i+1}</td>
                                <td className='border border-slate-300 px-3 bg-slate-100'>{pmb.nama_member}</td>
                                <td className='border border-slate-300 px-3 bg-slate-100'>{pmb.tanggal_penjualan}</td>
                                <td className='border border-slate-300 px-3 bg-slate-100 capitalize'>{pmb.jenis_sampah}</td>
                                <td className='border border-slate-300 px-3 bg-slate-100 capitalize'>{pmb.kategori_penjualan}</td>
                                <td className='border border-slate-300 px-3 bg-slate-100'>{pmb.total_penjualan}</td>
                                <td className='border border-slate-300 px-3 bg-slate-100 space-x-5'>
                                    <a className='text-green-700'>Edit</a>
                                    <a className='text-red-700'>Delete</a>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
