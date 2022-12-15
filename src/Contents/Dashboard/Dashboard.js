import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'
import AuthNavbar from '../../Components/AuthNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../Feature/AuthSlice'


function GetSampah() {
    const [data, setData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, []);
    const getData = async() => {
        const response = await axios.get('http://localhost:5000/sampah')
        setData(response.data)
    }

    const delData = async (Id) => {
        try {
            await axios.delete(`http://localhost:5000/sampah/${Id}`)
            getData()
        } catch (error) {
            console.log(error)
        }
    }

    const SingleProductSampah = ({id, nama, harga, berat, deskripsi}) => {
        return (
          <div className='border rounded-lg grid grid-cols-5'>
              <div className='bg-gray-500 rounded-l-lg'></div>
              <div className='m-5 col-span-4 space-y-3'>
                  <h1 className='font-semibold text-2xl'>{nama}</h1>
                  <h2 className='font-semibold text-xl'>Rp.{harga}</h2>
                  <h2 className='font-semibold text-md text-gray-500'>Berat : {berat} Kg</h2>
                  <TextTruncate
                        line={1}
                        element="span"
                        truncateText="…"
                        text={`${deskripsi}.`}
                        textTruncateChild={<a href="#"></a>}
                    />
                  <div className='space-x-3'>
                    <a className='bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 duration-150' href={`/dashboard/sampah/edit/${id}`}>Edit Produk</a>
                    <a onClick={() => delData(id)} className='bg-red-600 text-white p-3 rounded-lg hover:bg-red-500 duration-150' href='/dashboard/sampah'>Hapus Produk</a>
                  </div>
              </div>
          </div>
        )
    }

    if (data === null) {
        return (
            <div>
                <p className='text-center mt-10 text-2xl animate-ping'>Loading...</p>
            </div>
        )
    }
    return (
        <div  className='space-y-3'>
            {data.map((d) => (
                <SingleProductSampah nama={d.nama_sampah} harga={d.harga.toLocaleString('en-US')} berat={d.berat} id={d.id} deskripsi={d.deskripsi}/>
            ))}
        </div>
    )
}

function GetProduct() {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        getData()
    }, []);
    const getData = async() => {
        const response = await axios.get('http://localhost:5000/products')
        setData(response.data)
    }

    const delData = async (Id) => {
        try {
            console.log(Id)
            await axios.delete(`http://localhost:5000/products/${Id}`)
            getData()
        } catch (error) {
            console.log(error)
        }
    }

    const SingleProduct = ({id, nama, harga, deskripsi}) => {
        return (
          <div className='border rounded-lg grid grid-cols-5'>
              <div className='bg-gray-500 rounded-l-lg'></div>
              <div className='m-5 col-span-4 space-y-3'>
                  <h1 className='font-semibold text-2xl'>{nama}</h1>
                  <h2 className='font-semibold text-xl'>Rp.{harga}</h2>
                  <TextTruncate
                        line={1}
                        element="span"
                        truncateText="…"
                        text={`${deskripsi}.`}
                        textTruncateChild={<a href="#"></a>}
                    />
                    <br/>
                  <div className='space-x-3 block mt-5'>
                    <a className='bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 duration-150' href={`/dashboard/produk/edit/${id}`}>Edit Produk</a>
                    <a onClick={() => delData(id)} className='bg-red-600 text-white p-3 rounded-lg hover:bg-red-500 duration-150' href='/dashboard/produk'>Hapus Produk</a>
                  </div>
              </div>
          </div>
        )
    }

    if (data === null) {
        return (
            <div>
                <p className='text-center mt-10 text-2xl animate-ping'>Loading...</p>
            </div>
        )
    }
    return (
        <div  className='space-y-3'>
            {data.map((d) => (
                <SingleProduct nama={d.nama_produk} harga={d.harga.toLocaleString('en-US')} berat={d.berat} id={d.id} deskripsi={d.deskripsi}/>
            ))}
        </div>
    )
}

function Dashboard() {
    const params = String(Object.values(useParams()))
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
                            <li><a href='/dashboard/pembukuan'>Pembukuan</a></li>
                        </ul>
                    </div>
                </div>
                <div className=' col-span-4 pt-5 pb-16 pl-10'>
                    <div className='flex justify-between mr-60'>
                        <h1 className='text-2xl font-semibold'>Halaman Dashboard { params === 'sampah' ? "Produk Sampah" : "Produk Kerajinan" } </h1>
                        <a className='bg-green-600 text-white p-3 rounded-lg hover:bg-green-500 duration-150' href={`/dashboard/${params}/create`}>Tambah { params === 'sampah' ? "Sampah" : "Produk"}</a>
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