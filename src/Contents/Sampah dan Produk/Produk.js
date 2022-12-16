import { useState,useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { Helmet } from 'react-helmet'
import { BsBagDashFill, BsSearch } from 'react-icons/bs'
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import TextTruncate from 'react-text-truncate'
import { ip } from '../../Host';

const jenisSampah = [{title:'All', routeRequest:'all'},
                    {title:'Plastik', routeRequest:'plastik'}, 
                    {title:'Kaca', routeRequest:'kaca'}, 
                    {title:'Kertas', routeRequest:'kertas'}, 
                    {title:'Kaleng', routeRequest:'kaleng'}, 
                    {title:'Limbah Elektronik', routeRequest:'limbahelektronik'}]


const FilterJenisSampah = () => {
    const params = String(Object.values(useParams()))
    return (
        <div>
            {jenisSampah.map((jnsp) => (
                    params === jnsp.routeRequest ?
                    <h2 className='font-semibold text-xl ml-2 pr-28 pb-3'>{jnsp.title}</h2>
                    :
                    ""
                ))}
            <div className='mt-3 pl-2 py-3 shadow-md pr-28'>
                <h2 className='font-semibold text-xl ml-2 pr-28 border-b-2 pb-3'>Jenis Produk</h2>
                <ul className='mx-2 space-y-2 mt-2'>
                    {jenisSampah.map((jnsp) => (
                        <li><a className={params === jnsp.routeRequest ? 'text-red-600 border-l-8 border-red-400' : 'hover:text-red-400 hover:border-red-400 hover:border-l-4 duration-150'} href={`/produk/${jnsp.routeRequest}`}>{jnsp.title}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


const SingleProduct = ({nama, harga, deskripsi, jenis, user}) => {
  return (
    <div className='border rounded-lg grid grid-cols-5'>
        <div className='bg-gray-500 rounded-l-lg'>
        <img src='https://rare-gallery.com/thumbs/862283-Ferrari-Scuderia-Italia-Forza-Horizon-4-Front-Red.jpg'
            alt='image'
            className='object-contain h-60 w-96 object-center rounded-l-lg'/>
        </div>
        <div className='m-5 col-span-4 space-y-3'>
            <h1 className='font-semibold text-2xl'>{nama}</h1>
            <h2 className='font-semibold text-xl'>Rp.{harga.toLocaleString('en-US')}</h2>
            <h2 className='font-semibold text-md text-gray-500'>Dibuat Oleh : {user}</h2>
            <div className='flex'>
                <h5 className='uppercase bg-slate-500 text-slate-100 px-2'>{jenis}</h5>
            </div>
            <TextTruncate
                line={1}
                element="span"
                truncateText="…"
                text={`${deskripsi}.`}
                textTruncateChild={<a href="#"></a>}
            />
            <br/>
            <button className='bg-green-600 text-white p-3 rounded-lg hover:bg-blue-500 duration-150'>Add to Wishlist</button>
        </div>
    </div>
  )
}



function Produk() {
    const navigate = useNavigate()
    const jenisProduk = Object.values(useParams("plastik"))
    const [dataProduk, setDataProduk] = useState(null)
    useEffect(() => {
        fetch(`http://${ip}:5000/home/products`)
        .then((response) => response.json())
        .then((json) => setDataProduk(json))
    }, []);
    if (dataProduk === null) {
        return (
            <div>
                <Navbar/>
                <p className='text-center mt-10 text-2xl animate-ping'>Loading....</p>
            </div>
        )
    }
    return (
        <div>
            <Helmet>
                <title>Title | Sampah</title>
            </Helmet>
            <Navbar/>
            {/* <form className='mx-60 mt-5 sticky top-24'>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <BsSearch className='text-gray-300'/>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-200 drop-shadow-xl hover:drop-shadow-md duration-150" placeholder="Cari Barang disini..." required/>
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-green-700 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form> */}
            <section className='px-60 mt-10 flex space-x-5'>
                <aside>
                    <FilterJenisSampah />
                </aside>
                <aside className='space-y-5'>
                    {String(jenisProduk) !== 'all' ? 
                        dataProduk.filter((dp) => dp.jenis_produk === String(jenisProduk)).map((fdp) => (
                            <SingleProduct nama={fdp.nama_produk} harga={fdp.harga} deskripsi={fdp.deskripsi} jenis={fdp.jenis_produk} user={fdp.user.name}/>
                        ))
                        :
                        dataProduk.map((dp) => (
                            <SingleProduct nama={dp.nama_produk} harga={dp.harga} deskripsi={dp.deskripsi} jenis={dp.jenis_produk} user={dp.user.name}/>
                        ))
                    }
                </aside>
            </section>
        </div>
    )
}

export default Produk