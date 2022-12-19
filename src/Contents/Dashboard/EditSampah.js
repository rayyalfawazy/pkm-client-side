import AuthNavbar from '../../Components/AuthNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../Feature/AuthSlice'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, Component, useEffect } from 'react'
import axios from 'axios'

const jenis_sampah_list = [
    {title:'Plastik', value:'plastik'}, 
    {title:'Kaca', value:'kaca'}, 
    {title:'Kertas', value:'kertas'}, 
    {title:'Kaleng', value:'kaleng'}, 
    {title:'Limbah Elektronik', value:'limbahelektronik'}
]

const kategori_sampah_list = [
    {title:'Multi Layer', value:'multilayer'}, 
    {title:'Botol', value:'botol'}, 
    {title:'Kemasan', value:'kemasan'}, 
    {title:'Trash Bag', value:'trashbag'}, 
    {title:'Styrofoam', value:'styrofoam'}
]

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
        const response = await axios.get(`https://api.banksampahanggur.com/sampah/${id}`)
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
            await axios.patch(`https://api.banksampahanggur.com/sampah/${id}`, formData)
            navigate('/dashboard/sampah')
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <AuthNavbar/>
            <form className='px-5 pt-5 lg:px-60' onSubmit={submit}>
                <h1 className='text-center md:text-left'>Edit Sampah</h1>
                <div className='border rounded-xl mt-5 p-3 space-y-4'>
                    <div className='space-y-2 block md:space-y-0 md:m-3 md:grid md:grid-cols-4'>
                        <label className='block'>Product Name: </label>
                        <input className='border-2 rounded-lg md:ml-5 px-2 py-2 col-span-3 w-full md:w-auto'
                                type='text'
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}/>
                    </div>
                    <div className='space-y-2 block md:space-y-0 md:m-3 md:grid md:grid-cols-4 w-full md:w-auto'>
                        <label className='block'>Product Type: </label>
                        <select className='border rounded-md md:ml-5 px-2 py-2 col-span-3 w-full md:w-auto' value={jenis} onChange={(e) => setJenis(e.target.value)}>
                            <option value=""></option>
                            {jenis_sampah_list.map((jsl) => (
                                <option value={jsl.value}>{jsl.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className='space-y-2 block md:space-y-0 md:m-3 md:grid md:grid-cols-4'>
                        <label className='block'>Product Category: </label>
                        <select className='border rounded-md md:ml-5 px-2 py-2 col-span-3 w-full md:w-auto' value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value=""></option>
                            {kategori_sampah_list.map((ksl) => (
                                <option value={ksl.value}>{ksl.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className='space-y-2 block md:space-y-0 md:m-3 md:grid md:grid-cols-4'>
                        <label className='block'>Harga: </label>
                        <input className='border-2 rounded-lg md:ml-5 px-2 py-2 col-span-3 w-full md:w-auto'
                                type='text'
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}/>
                    </div>
                    <div className='space-y-2 block md:space-y-0 md:m-3 md:grid md:grid-cols-4'>
                        <label className='block'>Berat (Kg): </label>
                        <input className='border-2 rounded-lg md:ml-5 px-2 py-2 col-span-3 w-full md:w-auto'
                                type='text'
                                value={berat}
                                onChange={(e) => setBerat(e.target.value)}/>
                    </div>
                    <div className='space-y-2 block md:space-y-0 md:m-3 md:grid md:grid-cols-4'>
                        <label className='block'>Deskripsi: </label>
                        <textarea className='border-2 rounded-lg md:ml-5 px-2 py-2 col-span-3 w-full md:w-auto'
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
