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
        <div className='px-60 mt-28'>
            <form className='border mx-[500px] p-5 bg-white drop-shadow-lg' onSubmit={Auth}>
                <h1 className='text-center font-semibold text-3xl'>Login</h1>
                <hr className='mt-5'/>
                <div className='mt-5'>
                    <label>Username</label>
                    <input 
                        type='text' 
                        className='border p-2 rounded-md w-full mt-2' 
                        placeholder='Username Here'
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