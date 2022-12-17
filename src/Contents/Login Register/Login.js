import React, {useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginUser, reset } from '../../Feature/AuthSlice'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth);

    const Auth = (e) => {
        e.preventDefault();
        console.log(message)
        dispatch(LoginUser({email, password}));
    }

    useEffect(() =>{
        if (user || isSuccess) {
            navigate('/dashboard/sampah')
        } else {
            dispatch(reset());
        }
    },[user, isSuccess, dispatch, navigate])

  return (
    <div className='bg-gray-200 h-screen'>
        <Navbar/>
        <div className='px-5 md:px-60 mt-5 md:mt-44'>
            <form className='border mx-2 md:mx-5 lg:mx-[400px] p-5 bg-white drop-shadow-lg' onSubmit={Auth}>
                <h1 className='text-center font-semibold text-3xl'>Login</h1>
                <hr className='mt-5'/>
                <div className='mt-5'>
                    <label>Email</label>
                    <input 
                        type='email' 
                        className='border p-2 rounded-md w-full mt-2' 
                        placeholder='Email Here'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    {isError && <p className='font-light text-red-600 text-md'>{message}</p>}
                </div>
                <div className='mt-5'>
                    <label>Password</label>
                    <input 
                        type='password' 
                        className='border p-2 rounded-md w-full mt-2' 
                        placeholder='Password Here'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='mt-7'>
                    <p><a className='text-blue-700 hover:text-blue-500' href='/user/register'>Belum memiliki akun? Silahkan Register</a></p>
                    <p><a className='text-blue-700 hover:text-blue-500' href='/'>Butuh Bantuan?</a></p>
                    
                </div>
                <div className='mt-3'>
                    <button type='submit' className='bg-green-600 text-white px-3 py-2'>
                        {isLoading ? 'Loading...' : "Log In"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login