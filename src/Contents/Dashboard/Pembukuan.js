import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, json } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import axios from 'axios';
import AuthNavbar from '../../Components/AuthNavbar';
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../Feature/AuthSlice'
import AuthInformation from './AuthInformation'
import { host } from '../../Host';

export default function Pembukuan() {
    const [pembukuan, setPembukuan] = useState([])
    const [jumlahPenjualan, setJumlahPenjualan] = useState()
    const [querySearch, setQuerySearch] = useState("")
    const params = String(Object.values(useParams()))
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError, user} = useSelector((state) => state.auth)

    useEffect(()=>{
        dispatch(getMe())
    },[dispatch])

    useEffect(()=>{
        if (isError) {
            navigate('/user/login')
        }
    },[isError, navigate, user])

    useEffect(()=>{
        console.log(user)
    },[user])

    const fetchData = async() => {
        const response = await axios.get(`${host}/pembukuan/filter?search=${querySearch}`)
        setPembukuan(response.data)
    }
    useEffect(()=>{
        fetchData()
        console.log()
    },[querySearch, fetchData])

    const delData = async (Id) => {
        try {
            await axios.delete(`https://api.banksampahanggur.com/pembukuan/${Id}`)
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }

    if (user === null) {
        return (
            <p className='text-center mt-5'>Loading Autentication...</p>
        )
    }

    return (
    <div>
        <AuthNavbar/>
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
                        <li><a className={params === 'pembukuan' ? 'text-red-600 border-l-8 border-red-400' : ''} href='/dashboard/pembukuan'>Pembukuan</a></li>
                    </ul>
                </div>
            </div>
            <div className=' col-span-4 pt-5 pb-16 pl-10'>
                <div className='flex justify-between mr-60'>
                    <h1 className='text-2xl font-semibold'>Halaman Dashboard Pembukuan </h1>
                    <a className='bg-green-600 text-white p-3 rounded-lg hover:bg-green-500 duration-150' href={`/dashboard/pembukuan/create`}>Tambah Pembukuan</a>
                </div>
                {/* Search Bar */}
                <AuthInformation name={user.name} role={user.role}/>
                <form className='mr-60 mt-5 sticky top-24'>   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <BsSearch className='text-gray-500'/>
                        </div>
                        <input type="search" onChange={(e) => {setQuerySearch(e.target.value)}} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-200 drop-shadow-xl hover:drop-shadow-md duration-150" placeholder="Cari Pembukuan disini..."/>
                    </div>
                </form>

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
                                <td className='border border-slate-300 px-3 bg-slate-100'>{pmb.user.name}</td>
                                <td className='border border-slate-300 px-3 bg-slate-100'>{pmb.tanggal_penjualan}</td>
                                <td className='border border-slate-300 px-3 bg-slate-100 capitalize'>{pmb.jenis_sampah}</td>
                                <td className='border border-slate-300 px-3 bg-slate-100 capitalize'>{pmb.kategori_penjualan}</td>
                                <td className='border border-slate-300 px-3 bg-slate-100'>{pmb.total_penjualan}</td>
                                <td className='border border-slate-300 px-3 bg-slate-100 space-x-5'>
                                    <a className='text-green-700' href={`/dashboard/pembukuan/edit/${pmb.id}`}>Edit</a>
                                    <a onClick={()=>delData(pmb.id)} className='text-red-700' href='/dashboard/pembukuan'>Delete</a>
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
