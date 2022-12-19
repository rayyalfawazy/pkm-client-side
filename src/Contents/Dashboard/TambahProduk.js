import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../Feature/AuthSlice'
import axios from 'axios'
import AuthNavbar from '../../Components/AuthNavbar'

const jenis_sampah_list = [
    {title:'Plastik', value:'plastik'}, 
    {title:'Kaca', value:'kaca'}, 
    {title:'Kertas', value:'kertas'}, 
    {title:'Kaleng', value:'kaleng'}, 
    {title:'Limbah Elektronik', value:'limbahelektronik'}
]

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
            await axios.post(`https://api.banksampahanggur.com/products`, formData)
            navigate('/dashboard/produk')
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <AuthNavbar/>
            <form className='px-5 pt-5 lg:px-60' onSubmit={submit}>
                <h1 className='text-center md:text-left'>Tambah Produk Baru</h1>
                <div className='border rounded-xl mt-5 p-3 space-y-4'>
                    <div className='space-y-2 block md:space-y-0 md:m-3 md:grid md:grid-cols-4'>
                        <label className='block'>Product Name</label>
                        <input className='border-2 rounded-lg md:ml-5 px-2 py-2 col-span-3 w-full md:w-auto'
                                type='text'
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}/>
                    </div>
                    <div className='space-y-2 block md:space-y-0 md:m-3 md:grid md:grid-cols-4'>
                        <label className='block'>Product Type: </label>
                        <select className='border-2 rounded-lg md:ml-5 px-2 py-2 col-span-3 w-full md:w-auto' value={jenis} onChange={(e) => setJenis(e.target.value)}>
                            <option value=""></option>
                            {jenis_sampah_list.map((jsl) => (
                                <option value={jsl.value}>{jsl.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className='space-y-2 block md:space-y-0 md:m-3 md:grid md:grid-cols-4'>
                        <label className='block'>Harga</label>
                        <input className='border-2 rounded-lg md:ml-5 px-2 py-2 col-span-3 w-full md:w-auto'
                                type='text'
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}/>
                    </div>
                    <div className='space-y-2 block md:space-y-0 md:m-3 md:grid md:grid-cols-4'>
                        <label className='block'>Deskripsi</label>
                        <textarea className='border-2 rounded-lg md:ml-5 px-2 py-2 col-span-3 w-full md:w-auto'
                                type='text'
                                value={deskripsi}
                                onChange={(e) => setDeskripsi(e.target.value)}/>
                    </div>
                    <button className='py-2 px-4 bg-green-500 rounded-lg text-white'
                            type='submit'>Tambah Produk</button>
                </div>
            </form>
        </div>
    )
}
