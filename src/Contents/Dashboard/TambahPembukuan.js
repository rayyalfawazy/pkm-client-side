import { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getMe } from '../../Feature/AuthSlice'

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

export function CreatePembukuan() {
    const params = String(Object.values(useParams()))
    const [daftarMember, setDaftarMember] = useState(null);
    const [namaMember, setNamaMember] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [kategoriPenjualan, setKategoriPenjualan] = useState("");
    const [jenis, setJenis] = useState("");
    const [totalPenjualan, setTotalPenjualan] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {isError} = useSelector((state => state.auth))



    const getMember = async () => {
        const response = await axios.get(`https://api.banksampahanggur.com/users`)
        setDaftarMember(response.data)
    }

    useEffect(()=>{
        getMember()
    },[])

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
        let formData = {"userId":null, 
                        'tanggal_penjualan': null,
                        'total_penjualan':null,
                        'kategori_penjualan':null,
                        'jenis_sampah':null,
                    };
        formData.userId = namaMember
        formData.tanggal_penjualan = tanggal
        formData.total_penjualan = Number(totalPenjualan)
        formData.kategori_penjualan = kategoriPenjualan
        formData.jenis_sampah = jenis
        try {
            // console.log(formData)
            await axios.post(`https://api.banksampahanggur.com/pembukuan`, formData)
            navigate('/dashboard/pembukuan')
        } catch (error) {
            console.log(error)
        }
    }

    if (daftarMember === null) {
        return (
            <div>Loading</div>
        )
    }
    
    return (
        <div>
            <Navbar/>
            <form className='px-60 pt-5' onSubmit={submit}>
                <h1>Tambah Pembukuan Baru</h1>
                <div className='border rounded-xl mt-5 p-3 space-y-4'>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Member Name</label>
                        <select className='border rounded-md md:ml-5 px-2 py-2 col-span-3 w-full md:w-auto' value={namaMember} onChange={(e) => setNamaMember(e.target.value)}>
                            <option value=''>Pilih Member</option>
                            {daftarMember.filter((ksl) => ksl.role === "member").map((ksl) => (
                                <option value={ksl.id}>{ksl.name}</option>
                            ))}
                        </select>
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
                        <option value=''>Pilih Jenis Penjualan</option>
                            {kategori_penjualan_list.map((kpl) => (
                                <option value={kpl.value}>{kpl.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className='m-3 grid grid-cols-4'>
                        <label>Jenis Sampah</label>
                        <select className='border rounded-md ml-5 px-2 py-2 col-span-3' value={jenis} onChange={(e) => setJenis(e.target.value)} >
                        <option value=''>Pilih Jenis Sampah</option>
                            {jenis_sampah_list.map((jsl) => (
                                <option value={jsl.value}>{jsl.title}</option>
                            ))}
                        </select>
                    </div>
                    <button className='py-2 px-4 bg-green-500 rounded-lg text-white'
                            type='submit'>Tambah Pembukuan</button>
                </div>
            </form>
        </div>
    )
}
