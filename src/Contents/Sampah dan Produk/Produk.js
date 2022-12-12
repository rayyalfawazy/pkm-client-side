import { useState,useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { Helmet } from 'react-helmet'
import { BsBagDashFill, BsSearch } from 'react-icons/bs'
import { useParams } from 'react-router-dom';

const jenisSampah = [{title:'All', routeRequest:'all'},
                    {title:'Plastik', routeRequest:'plastik'}, 
                    {title:'Kaca', routeRequest:'kaca'}, 
                    {title:'Kertas', routeRequest:'kertas'}, 
                    {title:'Kaleng', routeRequest:'kaleng'}, 
                    {title:'Limbah Elektronik', routeRequest:'limbahelektronik'}]


const FilterJenisSampah = () => {
    return (
        <div>
            <div className=' mt-3 pl-2 pr-5 py-3 shadow-md'>
                <h1 className='font-semibold text-xl mx-2 border-b pb-3'>Jenis Sampah - (Jenis Sampah)</h1>
                <ul className='mx-2 space-y-2 mt-2'>
                    {jenisSampah.map((jnsp) => (
                        <li><a href={`/produk/${jnsp.routeRequest}`}>{jnsp.title}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


const SingleProduct = ({nama, harga, deskripsi, kategori}) => {
  return (
    <div className='border rounded-lg'>
        <div className='bg-gray-500 w-full h-28 rounded-t-lg'></div>
        <div className='space-y-2 ml-4 mt-4 mr-16'>
            <h1 className='font-semibold text-xl'>{nama}</h1>
            <h2 className='font-semibold text-xl'>Rp.{harga.toLocaleString('en-US')}</h2>
            <p>{deskripsi}.</p>
            <ul className='flex space-x-5'>
                <li className='uppercase bg-gray-300 text-gray-900 px-2 font-semibold'>{kategori}</li>
            </ul>
            <button className='bg-green-600 py-2 px-3 text-white'>Add to Cart</button>
        </div>
    </div>
  )
}



function Produk() {
    const jenisProduk = Object.values(useParams("plastik"))
    const [dataProduk, setDataProduk] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/products')
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
            <form className='mx-60 mt-5 sticky top-24'>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <BsSearch className='text-gray-300'/>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-200 drop-shadow-xl hover:drop-shadow-md duration-150" placeholder="Cari Barang disini..." required/>
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-green-700 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>
            <section className='px-60 mt-10 flex space-x-5'>
                <aside>
                    <h1 className='font-semibold text-xl'>Filter</h1>
                    <FilterJenisSampah />
                </aside>
                <aside className='grid grid-cols-4 space-x-5 '>
                    {String(jenisProduk) !== 'all' ? 
                        dataProduk.filter((dp) => dp.jenis_produk === String(jenisProduk)).map((fdp) => (
                            <SingleProduct nama={fdp.nama_produk} harga={fdp.harga} deskripsi={fdp.deskripsi} kategori={fdp.jenis_produk}/>
                        ))
                        :
                        dataProduk.map((dp) => (
                            <SingleProduct nama={dp.nama_produk} harga={dp.harga} deskripsi={dp.deskripsi} kategori={dp.jenis_produk}/>
                        ))
                    }
                </aside>
            </section>
        </div>
    )
}

export default Produk