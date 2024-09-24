import React, { useState } from 'react';
import {Login} from '../../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import authService from '../../appwrite/auth';
import Input from '../Input/Input';
import Btn from '../Btn/Btn';
import { useDispatch } from 'react-redux';

function LoginPage() {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate();
const dispatch = useDispatch()
const login = async (data) => {
    try {
        let session = await authService.login(data);
        if (session) {
            const userData = await authService.isLoggedIn();
            if (userData) dispatch(Login(userData));
            navigate("/");
        } else {
            setError("Invalid email or password");
        }
    } catch (error) {
        console.log(error); 
        setError(error.message);  
    }
};
    return (
        <div className="font-[sans-serif]">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
                    <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                        <form onSubmit={handleSubmit(login)} className="space-y-4">
                            <div className="mb-8">
                                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Sign in to your account and explore a world of possibilities. Your journey begins here.</p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                <div className="relative flex items-center">
                                    <Input
                                        type='text'
                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                                        placeholder="Enter your email"
                                        {...register('email', {
                                            required: true
                                        })}
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                    </svg>
                                    
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                <div className="relative flex items-center">
                                    <Input
                                        type={showPass ? 'text' : 'password'}
                                        {...register('password',{
                                            required: true
                                        })}
                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                                        placeholder="Enter password"
                                    />
                                    <svg onClick={() => setShowPass((prev) => !prev)} xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="mt-8">
                            {error && <p className="text-sm mt-8 text-center text-red-500 mb-2">{error} </p>}
                                <Btn type="submit" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                    Log in
                                </Btn>
                            </div>
                        </form>

                        <p className="text-sm mt-8 text-center text-gray-800">Don't have an account <Link to="/register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
                    </div>

                    <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                        <img src="https://readymadeui.com/login-image.webp" className="w-full h-full max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
