import Navbar from '../../Components/Navbar'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, Component, useEffect } from 'react'
import axios from 'axios'

const kategori_penjualan_list = [
    {title:'Sampah', value:'sampah'},
    {title:'Produk Kerajinan', value:'produk'}
]

const jenis_sampah_list = [
    {title:'Plastik', value:'plastik'}, 
    {title:'Kaca', value:'kaca'}, 
    {title:'Kertas', value:'kertas'}, 
    {title:'Kaleng', value:'kaleng'}, 
    {title:'Limbah Elektronik', value:'limbahelektronik'}
]

export function EditPembukuan() {
    const id = String(Object.values(useParams()))
    const [namaMember, setNamaMember] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [kategoriPenjualan, setKategoriPenjualan] = useState("");
    const [jenis, setJenis] = useState("");
    const [totalPenjualan, setTotalPenjualan] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getProductById()
    }, []);

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/pembukuan/${id}`)
        setNamaMember(response.data.nama_member)
        setTanggal(response.data.tanggal_penjualan)
        setTotalPenjualan(response.data.total_penjualan)
        setKategoriPenjualan(response.data.kategori_penjualan)
        setJenis(response.data.jenis_sampah)
    }

    const submit = async (e) => {
        e.preventDefault();
        let formData = {"nama_member":null, 
                        'tanggal_penjualan': null,
                        'total_penjualan':null,
                        'kategori_penjualan':null,
                        'jenis_sampah':null,
                    };
        formData.nama_member = namaMember
        formData.tanggal_penjualan = tanggal
        formData.total_penjualan = Number(totalPenjualan)
        formData.kategori_penjualan = kategoriPenjualan
        formData.jenis_sampah = jenis
        try {
            console.log(formData)
            await axios.put(`http://localhost:5000/pembukuan/${id}`, formData)
            navigate('/dashboard/pembukuan')
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <Navbar/>
            <form className='px-60 pt-5' onSubmit={submit}>
                <h1>Edit Sampah</h1>
                <div className='border rounded-xl mt-5 p-3 space-y-4'>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Member Name: </label>
                        <input className='border-2 rounded-lg ml-5 px-2 py-2 col-span-3'
                                type='text'
                                value={namaMember}
                                onChange={(e) => setNamaMember(e.target.value)}/>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Tanggal Penjualan</label>
                        <input className='border rounded-md ml-5 px-2 py-2 col-span-3'
                                type='date'
                                value={tanggal}
                                onChange={(e) => setTanggal(e.target.value)}/>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Total Penjualan</label>
                        <input className='border rounded-md ml-5 px-2 py-2 col-span-3'
                                type='text'
                                value={totalPenjualan}
                                onChange={(e) => setTotalPenjualan(e.target.value)}/>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Kategori Penjualan</label>
                        <select className='border rounded-md ml-5 px-2 py-2 col-span-3' value={kategoriPenjualan} onChange={(e) => setKategoriPenjualan(e.target.value)} >
                            {kategori_penjualan_list.map((kpl) => (
                                <option value={kpl.value}>{kpl.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Jenis Sampah</label>
                        <select className='border rounded-md ml-5 px-2 py-2 col-span-3' value={jenis} onChange={(e) => setKategoriPenjualan(e.target.value)} >
                            {jenis_sampah_list.map((jsl) => (
                                <option value={jsl.value}>{jsl.title}</option>
                            ))}
                        </select>
                    </div>
                    <button className='py-2 px-4 bg-green-500 rounded-lg text-white'
                            type='submit'>Update Produk</button>
                </div>
            </form>
        </div>
    )
}
