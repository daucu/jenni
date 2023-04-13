import React from 'react';
import pf1 from './images/pf1.webp';
import pf2 from './images/pf2.webp';
import pf3 from './images/pf3.webp';
import pf4 from './images/pf4.webp';

export default function Powerful_features() {
  return (
    <div className='px-4 pt-[80px]'>
        <div className='max-w-[1250px] m-auto'>
            <p className='text-[14px] leading-[21px] text-[#66bb66] font-bold text-center'>POWERFUL FEATURES</p>
            <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold text-center mt-6'>Write, cite, and edit</p>
            <div className='flex justify-center'>
                <p className='text-[#555] text-[16px] leading-[22px] sm:text-[22px] sm:leading-[31px] text-center mt-3'>Features built to enhance your writing capabilities</p>
            </div>
            <div className='mt-9 flex flex-wrap'>
                <div className='sm:w-1/2 px-3 py-5'>
                    <div>
                        <img src={pf1} alt="" className='w-full rounded-lg shadow-lg'/>
                        <p className='text-[20px] leading-[24px] sm:text-[32px] sm:leading-[38px] font-bold text-[#0a001f] mt-3'>AI Autocomplete</p>
                        <p className='text-[#555] text-[20px] leading-[24px]  sm:text-[22px] sm:leading-[31px] mt-3'>Autocomplete will write alongside you to beat writer's block</p>
                    </div>
                </div>
                <div className='sm:w-1/2 px-3 py-5'>
                    <div>
                        <img src={pf2} alt="" className='w-full rounded-lg shadow-lg'/>
                        <p className='text-[20px] leading-[24px] sm:text-[32px] sm:leading-[38px] font-bold text-[#0a001f] mt-3'>Customized Styles</p>
                        <p className='text-[#555] text-[20px] leading-[24px] sm:text-[22px] sm:leading-[31px] mt-3'>Choose your tone and type for personalized AI generations</p>
                    </div>
                </div>
                <div className='sm:w-1/2 px-3 py-5'>
                    <div>
                        <img src={pf3} alt="" className='w-full rounded-lg shadow-lg'/>
                        <p className='text-[20px] leading-[24px] sm:text-[32px] sm:leading-[38px] font-bold text-[#0a001f] mt-3'>In-text Citations</p>
                        <p className='text-[#555] text-[20px] leading-[24px] sm:text-[22px] sm:leading-[31px] mt-3'>Jenni consults the latest research and cites in APA, MLA, or Harvard style</p>
                    </div>
                </div>
                <div className='sm:w-1/2 px-3 py-5'>
                    <div>
                        <img src={pf4} alt="" className='w-full rounded-lg shadow-lg'/>
                        <p className='text-[20px] leading-[24px] sm:text-[32px] sm:leading-[38px] font-bold text-[#0a001f] mt-3'>Paraphrase & Rewrite</p>
                        <p className='text-[#555] text-[20px] leading-[24px] sm:text-[22px] sm:leading-[31px] mt-3'>Paraphrase any text in any tone. Rewrite the internet customized to you</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
