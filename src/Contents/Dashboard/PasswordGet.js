import React from 'react'
import Navbar from '../../Components/Navbar';
import { useState } from 'react';
import { ProtectedRoutes } from '../../Router';
import { Navigate, useNavigate } from 'react-router-dom';

function PasswordGet() {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const LogInto = () => {
        const keyPassword = 'abdimasyarakat'
        if (password === keyPassword) {
            ProtectedRoutes(true)
            navigate('/dashboard/sampah')
        } else {
            navigate('/403')
        }
    }

    return (
        <div>
            <Navbar/>
            <div className='border mt-10 mx-96 p-5 space-x-2'>
                <h1 className='border-b mb-5 text-2xl font-semibold'>Enter Password</h1>
                <label>Password:</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)} className='border rounded-md py-2 px-2 w-3/4'/>
                <button onClick={LogInto} className='bg-green-600 text-white px-2 py-2 rounded-md hover:bg-green-500 duration-150' >Access Dashboard</button>
            </div>
        </div>
    )
}

export default PasswordGet