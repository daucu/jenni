import React from 'react';
import { discord, instagram, linkedin, tiktok, twitter, youtube } from './Svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='p-12 md:p-[70px] bg-[#0A001F] text-white'>
        <div className='max-w-[900px] m-auto sm:flex'>
            <div className='sm:w-1/3 p-5'>
                <Link to="/" className='w-[110px] h-[40px] flex items-center shrink grow basis-0'>
                    {/* <img src={leaf} alt="" className='h-[36px]' style={{transform:'rotateY(180deg)'}}/> */}
                    <p className='font-bold text-[30px] ml-2 tracking-tighter text-[#422099]'>AI</p>
                    <p className='font-bold text-[30px] ml-2 tracking-tighter text-white'>Scribbler</p>
                </Link>
                <p className='text-[18px] leading-[25px] text-[#bbb]'>Copyright &copy; 2022 AI Scribbler Inc.</p>
                <p className='text-[18px] leading-[25px] text-[#bbb]'>All rights reserved.</p>
            </div>
            <div className='sm:w-1/3 flex sm:justify-center p-5'>
                <div>
                <p className='text-[30px] font-semibold'>Company</p>
                <div className='hidden items-center'>
                    <p className='text-[18px] leading-[25px] text-[#bbb] cursor-pointer'>Influencer program</p>
                    <div className='bg-[#CCEBFF] text-[#079CFF] px-2 py-1 rounded-md ml-1 text-[11px] leading-[13px] font-bold'>New</div>
                </div>
                <p className='text-[18px] leading-[25px] text-[#bbb] mt-2 cursor-pointer'>Careers</p>
                <div className='flex items-center mt-4'>
                    <div className='cursor-pointer'>{instagram}</div>
                    <div className='mx-3 cursor-pointer'>{youtube}</div>
                    <div className='cursor-pointer'>{twitter}</div>
                    <div className='mx-3 cursor-pointer'>{discord}</div>
                    <div className='cursor-pointer'>{linkedin}</div>
                </div>
                </div>
            </div>
            <div className='sm:w-1/3 flex sm:justify-end p-5'>
                <div>
                <p className='text-[30px] font-semibold'>Legal</p>
                <p className='text-[18px] leading-[25px] text-[#bbb] cursor-pointer'>Terms of Service</p>
                <p className='text-[18px] leading-[25px] text-[#bbb] mt-2 cursor-pointer'>Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}
