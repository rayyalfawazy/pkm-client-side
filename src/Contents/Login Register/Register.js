import React, {useState} from 'react'
import Navbar from '../../Components/Navbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ip } from '../../Host';

function Register() {
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const navigate = useNavigate()
    const submit = async (e) => {
        e.preventDefault()
        if (password !== confPassword) {
            navigate('/user/register')
        }
        let formData = {"name":null, 
                        'email': null,
                        'password':null,
                        'confPassword':null,
                        "role":"user"
                    };
        formData.name = fullname
        formData.email = email
        formData.password = password
        formData.confPassword = confPassword
        try {
            await axios.post(`http://${ip}:5000/users`, formData)
            navigate('/user/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='bg-gray-200 h-screen'>
            <Navbar/>
            <div className='px-5 md:px-60 mt-5 md:mt-44'>
                <form className='border mx-2 md:mx-5 lg:mx-[400px] p-5 bg-white shadow-2xl' onSubmit={submit}>
                    <h1 className='text-center font-semibold text-3xl'>Register</h1>
                    <hr className='mt-5'/>
                    <div className='mt-5'>
                        <label>Email</label>
                        <input 
                            type='email' 
                            className='border p-2 rounded-md w-full mt-2' 
                            placeholder='Email Here'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                    </div>
                    <div className='mt-5'>
                        <label>Full Name</label>
                        <input 
                            type='text' 
                            className='border p-2 rounded-md w-full mt-2' 
                            placeholder='Full Name Here'
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            required/>
                    </div>
                    <div className='mt-5'>
                        <label>Password</label>
                        <input 
                            type='password' 
                            className='border p-2 rounded-md w-full mt-2' 
                            placeholder='Password Here' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                    </div>
                    <div className='mt-5'>
                        <label>Confirm Password</label>
                        <input 
                            type='password' 
                            className='border p-2 rounded-md w-full mt-2' 
                            placeholder='Type Again Your Password'
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                            required/>
                        {confPassword !== password ? <p className='font-light text-red-600 text-md'>Password tidak sama</p> : ""}
                    </div>
                    <div className='mt-7'>
                        <a className='text-blue-700 hover:text-blue-500' href='/user/login'>Sudah memiliki akun? Silahkan Login</a>
                        
                    </div>
                    <div className='mt-3'>
                        <button className='bg-green-600 text-white px-3 py-2'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register