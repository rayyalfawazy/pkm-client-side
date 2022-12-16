import AuthNavbar from '../../Components/AuthNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../Feature/AuthSlice'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, Component, useEffect } from 'react'
import axios from 'axios'
import { ip } from '../../Host'

export function EditSampah() {
    const id = String(Object.values(useParams()))
    const [nama, setNama] = useState("");
    const [jenis, setJenis] = useState("");
    const [category, setCategory] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [harga, setHarga] = useState("");
    const [berat, setBerat] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getProductById()
    }, []);

    const dispatch = useDispatch();
    const {isError} = useSelector((state => state.auth))

    useEffect(()=>{
        dispatch(getMe())
    },[dispatch])

    useEffect(()=>{
        if (isError) {
            navigate('/user/login')
        }
    },[isError, navigate])

    const getProductById = async () => {
        const response = await axios.get(`http://${ip}:5000/sampah/${id}`)
        setNama(response.data.nama_sampah)
        setJenis(response.data.jenis_sampah)
        setCategory(response.data.kategori_sampah)
        setBerat(response.data.berat)
        setHarga(response.data.harga)
        setDeskripsi(response.data.deskripsi)
    }

    const submit = async (e) => {
        e.preventDefault();
        let formData = {"nama_sampah":null, 
                        'jenis_sampah': null,
                        'kategori_sampah':null,
                        'harga':null,
                        'berat':null,
                        'deskripsi':null};
        formData.nama_sampah = nama
        formData.jenis_sampah = jenis
        formData.kategori_sampah = category
        formData.harga = Number(harga)
        formData.berat = Number(berat)
        formData.deskripsi = deskripsi
        try {
            console.log(formData)
            await axios.patch(`http://${ip}:5000/sampah/${id}`, formData)
            navigate('/dashboard/sampah')
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <AuthNavbar/>
            <form className='px-60 pt-5' onSubmit={submit}>
                <h1>Edit Sampah</h1>
                <div className='border rounded-xl mt-5 p-3 space-y-4'>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Product Name: </label>
                        <input className='border-2 rounded-lg ml-5 px-2 py-2 col-span-3'
                                type='text'
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}/>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Product Type: </label>
                        <input className='border-2 rounded-lg ml-5 px-2 py-2 col-span-3'
                                type='text'
                                value={jenis}
                                onChange={(e) => setJenis(e.target.value)}/>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Product Category: </label>
                        <input className='border-2 rounded-lg ml-5 px-2 py-2 col-span-3'
                                type='text'
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Harga: </label>
                        <input className='border-2 rounded-lg ml-5 px-2 py-2 col-span-3'
                                type='text'
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}/>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Berat (Kg): </label>
                        <input className='border-2 rounded-lg ml-5 px-2 py-2 col-span-3'
                                type='text'
                                value={berat}
                                onChange={(e) => setBerat(e.target.value)}/>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Deskripsi: </label>
                        <textarea className='border-2 rounded-lg ml-5 px-2 py-2 col-span-3'
                                type='text'
                                value={deskripsi}
                                onChange={(e) => setDeskripsi(e.target.value)}/>
                    </div>
                    <button className='py-2 px-4 bg-green-500 rounded-lg text-white'
                            type='submit'>Update Sampah</button>
                </div>
            </form>
        </div>
    )
}
