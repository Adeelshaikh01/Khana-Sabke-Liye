import React from 'react';
import { signInWithEmailAndPassword, auth } from '../../src/config/firebase.js';
import { useState } from 'react';
import Profile from './profile.js'

const Login = () => {
    const [userEmail ,setEmail] = useState("")
    const [userPassword ,setPassword] = useState("")
    const [boolValue ,setBool] = useState(true)
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, userEmail, userPassword)
               .then((res) => {
                  console.log(res)
                  setBool(false)
               })
               .catch((err) => {
                  alert(err.code)
               })
        
    };
    return (
        <>
        {boolValue ? <div className='flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div> :
        <Profile/>
        }
        </>
    );
};

export default Login;