import React from 'react';
import { google } from './Svg';
import login_register from './images/login_register.png';

export default function Login() {
  return (
    <div>
        <div className='flex min-h-screen'>
            <div className='w-full md:w-1/2 bg-[#FAFAFC] py-[70px] flex justify-center items-center'>
                <div className='sm:w-[400px]'>
                    <p className='text-[30px] leading-[36px] text-[#111827] font-extrabold'>Welcome back</p>
                    <p className='text-[16px] leading-[25px] text-[#6b7280]'>Login to continue writing</p>
                    <button className='flex items-center justify-center h-[52px] rounded-md border mt-10 w-full'>
                        <div className='mr-3'>{google}</div>
                        <div className='text-[16px] leading-[16px] text-[#111827] font-semibold'>Login in with Google</div>
                    </button>
                    <div className='mt-12'>
                        <div className='h-[1px] bg-black w-full'></div>
                        <div className='flex justify-center'>
                            <p className='bg-white px-1 text-[14px] leading-[20px] text-[#6b7280] relative text-center top-[-10px] inline'>Or continue with</p>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div>
                            <p className='text-[14px] font-medium leading-[20px] text-[#374151]'>Email address</p>
                            <div className='border rounded-md w-full'>
                                <input type="email"  className='w-full outline-none h-[36px] rounded-md px-3 placeholder:font-normal' placeholder='you@example.com'/>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <p className='text-[14px] font-medium leading-[20px] text-[#374151]'>Password</p>
                            <div className='border rounded-md w-full'>
                                <input type="password"  className='w-full outline-none h-[36px] rounded-md px-3 placeholder:font-normal' placeholder='Password'/>
                            </div>
                        </div>
                        <button className='text-center h-[52px] rounded-md border mt-6 w-full bg-[#535CEA] text-white'>Login</button>
                    </div>
                    <p className='text-[14px] leading-[20px] text-[#616af3] mt-3'>Forgot Password?</p>
                    <div className='flex items-center text-[14px] leading-[20px] cursor-pointer mt-6'>
                        <p className='text-[#6b7280]'>Dont have an account?&nbsp;</p>
                        <p className='text-[#616af3] hover:text-[#ff0000]'>Sign up here</p>
                    </div>
                </div>      
            </div>
            <div className='w-1/2 bg-[#4A55ED] md:flex items-center justify-center hidden'>
                <div>
                    <div className='bg-center bg-cover h-[350px] w-full' style={{backgroundImage:`url(${login_register})`}}></div>
                    <div className='flex justify-center'>
                        <div>
                            <p className='text-[36px] leading-[40px] text-[#f2f3fa] text-center font-extrabold max-w-[500px]'>Say 👋 to your best writing</p>
                            <p className='text-[36px] leading-[40px] text-[#f2f3fa] text-center font-extrabold max-w-[500px] mt-4'>jenni.ai</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
