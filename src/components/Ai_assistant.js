import React from 'react';
import ai_assistant from './images/ai_assistant.webp';

export default function Ai_assistant() {
  return (
    <div className='px-4 pt-[80px]'>
        <div className='max-w-[1250px] m-auto'>
            <p className='text-[14px] leading-[21px] text-[#BB66CC] font-bold text-center'>AI ASSISTANT</p>
            <p className='text-[20px] leading-[30px] sm:text-[30px] sm:leading-[40px] text-[#0a001f] font-extrabold text-center mt-6'>SCRIBBLER IS JUST LIKE WRITING EFFORTLESSLY BUT ON STEROIDS</p>
            <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold text-center mt-6'>Generate months of social media content in minutes</p>
            <div className='hidden justify-center'>
                <p className='text-[#555] text-[16px] leading-[22px] sm:text-[22px] sm:leading-[31px] text-center mt-3'>Generate months of social media content in minutes</p>
            </div>
            <div  className='flex justify-center mt-10'>
                <button className='rounded-xl text-[20px] sm:text-[24px] text-white font-semibold px-5 py-3 bg-gradient-to-r from-[#3F1D96] to-[#7755CC] hover:transition-all'>Start writing for free</button>
            </div>
            <img src={ai_assistant} alt="" className='lg:max-w-[900px] mx-auto mt-10 hidden'/>
        </div>
    </div>
  )
}
