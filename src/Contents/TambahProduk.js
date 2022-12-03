import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'

export function CreateSampah() {
    const params = String(Object.values(useParams()))
    return (
        <div>
            <Navbar/>
            <form className='px-60 pt-5'>
                <h1>Tambah Sampah Baru</h1>
            </form>
        </div>
    )
}

export function CreateProduk() {
    const params = String(Object.values(useParams()))
    return (
        <div>
            <Navbar/>
            <form className='px-60 pt-5'>
                <h1>Tambah Produk Baru</h1>
                <div className='border rounded-xl mt-5 p-3 space-y-4'>
                    <div>
                        <p htmlFor='product_name' className='mr-3'>Nama Produk:</p>
                        <input className='px-5 py-2 w-3/4 drop-shadow-lg rounded-lg border' type='text' name='product_name' placeholder='Nama Produk'/>
                    </div>
                    <div>
                        <p htmlFor='product_name' className='mr-3'>Jenis Produk:</p>
                        <input className='px-5 py-2 w-3/4 drop-shadow-lg rounded-lg border' type='text' name='product_name' placeholder='Jenis Produk'/>
                    </div>
                    <div>
                        <p htmlFor='product_name' className='mr-3'>Deskripsi Produk:</p>
                        <textarea className='px-5 py-2 w-3/4 drop-shadow-lg rounded-lg border' type='text' name='product_name' placeholder='Deskripsi Produk'/>
                    </div>
                    <button className='py-2 px-4 bg-green-500 rounded-lg text-white' formMethod='POST'>Tambah Produk</button>
                </div>
            </form>
        </div>
    )
}