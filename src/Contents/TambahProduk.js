import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import { useState, Component } from 'react'

const formElements = [
    {
        label:'Nama',
        key:'nama'
    },{
        label:'Jenis',
        key:'jenis'
    }
]

export function CreateProduk() {
    const params = String(Object.values(useParams()))
    // const [nama, setNama] = useState("");
    // const [jenis, setJenis] = useState("");
    // const [deskripsi, setDeskripsi] = useState("");
    const [formData, setFormData] = useState({})

    const handleChange = (value, key) => {
        setFormData({...formData, ...{ [key]:value }})
    }

    const submit = () => {
        if (formInvalid()) {
            return
        } else {
            // Todo : Store to Backend method POST
        }
    }

    const formInvalid = () => {
        let returnValue = false
        formElements.forEach(formElement => {
            if (formData[formElement.key] === undefined) {
                alert(formElement.label + " is Missing")
                returnValue = true
            }
        })
        return returnValue
    }

    return (
        <div>
            <Navbar/>
            <form className='px-60 pt-5' onSubmit={console.log()}>
                <h1>Tambah Produk Baru</h1>
                <div className='border rounded-xl mt-5 p-3 space-y-4'>
                    {formElements.map((formElement) => (
                        <div className='m-3'>
                            {formElement.label}:
                            <input className='border rounded-md ml-5 px-2 py-2'
                                    value={formData[formElement.key]}
                                    onChange={(e) => {handleChange(e.target.value, formElement.key)}}
                                    required/>
                        </div>
                    ))}
                    <button className='py-2 px-4 bg-green-500 rounded-lg text-white'
                            formAction=''
                            formMethod='post'
                            type='submit'>Tambah Produk</button>
                </div>
            </form>
        </div>
    )
}
