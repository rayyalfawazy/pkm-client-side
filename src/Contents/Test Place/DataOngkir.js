import {useState,useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import axios from 'axios'

function DataOngkir() {
    const [dataCity, setDataCity] = useState(null)

    console.log(dataCity)
    return (
        <div>
            <Navbar/>
            <div className='px-60 py-5'>

            </div>
        </div>
    )
}

export default DataOngkir