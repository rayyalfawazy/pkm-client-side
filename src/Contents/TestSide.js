import axios from 'axios'
import React from 'react'

function TestSide() {
    const data = axios('https://api.rajaongkir.com/starter/province', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'key' : '875242bf1e344787d77a5783d6b1e87f'
        },
        mode: 'no-cors',
        withCredentials: true,
        credentials: 'same-origin',
    })
    return (
        <div>{data}</div>
    )
}

export default TestSide