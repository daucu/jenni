import React from 'react';
import { discord, instagram, tiktok, twitter } from './Svg';

export default function Footer() {
  return (
    <div className='p-12 md:p-[70px] bg-[#0A001F] text-white'>
        <div className='max-w-[900px] m-auto sm:flex'>
            <div className='sm:w-1/3 p-5'>
                <p className='text-[40px] font-black'>jenni</p>
                <p className='text-[18px] leading-[25px] text-[#bbb]'>Copyright &copy; 2022 Jenni Inc.</p>
                <p className='text-[18px] leading-[25px] text-[#bbb]'>All rights reserved.</p>
            </div>
            <div className='sm:w-1/3 flex sm:justify-center p-5'>
                <div>
                <p className='text-[30px] font-semibold'>Company</p>
                <div className='flex items-center'>
                    <p className='text-[18px] leading-[25px] text-[#bbb]'>Influencer program</p>
                    <div className='bg-[#CCEBFF] text-[#079CFF] px-2 py-1 rounded-md ml-1 text-[11px] leading-[13px] font-bold'>New</div>
                </div>
                <p className='text-[18px] leading-[25px] text-[#bbb] mt-2'>Careers</p>
                <div className='flex items-center mt-4'>
                    <div>{instagram}</div>
                    <div className='mx-3'>{tiktok}</div>
                    <div className=''>{twitter}</div>
                    <div className='ml-3'>{discord}</div>
                </div>
                </div>
            </div>
            <div className='sm:w-1/3 flex sm:justify-end p-5'>
                <div>
                <p className='text-[30px] font-semibold'>Legal</p>
                <p className='text-[18px] leading-[25px] text-[#bbb]'>Terms of Service</p>
                <p className='text-[18px] leading-[25px] text-[#bbb] mt-2'>Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}
