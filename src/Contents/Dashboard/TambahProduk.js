import { useParams, useNavigate } from 'react-router-dom'
import { useState, Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../Feature/AuthSlice'
import axios from 'axios'
import AuthNavbar from '../../Components/AuthNavbar'

export function CreateProduk() {
    const params = String(Object.values(useParams()))
    const [nama, setNama] = useState("");
    const [jenis, setJenis] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [harga, setHarga] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector((state => state.auth))

    useEffect(()=>{
        dispatch(getMe())
    },[dispatch])

    useEffect(()=>{
        if (isError) {
            navigate('/user/login')
        }
    },[isError, navigate])

    const submit = async (e) => {
        e.preventDefault();
        let formData = {"nama_produk":null, 
                        'jenis_produk': null,
                        'harga':null,
                        'deskripsi':null};
        formData.nama_produk = nama
        formData.jenis_produk = jenis
        formData.harga = harga
        formData.deskripsi = deskripsi
        try {
            console.log(formData)
            await axios.post('http://localhost:5000/products', formData)
            navigate('/dashboard/produk')
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <AuthNavbar/>
            <form className='px-60 pt-5' onSubmit={submit}>
                <h1>Tambah Produk Baru</h1>
                <div className='border rounded-xl mt-5 p-3 space-y-4'>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Product Name</label>
                        <input className='border rounded-md ml-5 px-2 py-2 col-span-3'
                                type='text'
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}/>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Product Type</label>
                        <input className='border rounded-md ml-5 px-2 py-2 col-span-3'
                                type='text'
                                value={jenis}
                                onChange={(e) => setJenis(e.target.value)}/>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Harga</label>
                        <input className='border rounded-md ml-5 px-2 py-2 col-span-3'
                                type='text'
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}/>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Deskripsi</label>
                        <textarea className='border rounded-md ml-5 px-2 py-2 col-span-3'
                                type='text'
                                value={deskripsi}
                                onChange={(e) => setDeskripsi(e.target.value)}/>
                    </div>
                    <button className='py-2 px-4 bg-green-500 rounded-lg text-white'
                            type='submit'>Update Produk</button>
                </div>
            </form>
        </div>
    )
}