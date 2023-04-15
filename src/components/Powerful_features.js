import React from 'react';
import pf1 from './images/pf1.webp';
import pf2 from './images/pf2.webp';
import pf3 from './images/pf3.webp';
import pf4 from './images/pf4.webp';
import { HiOutlineLightBulb } from 'react-icons/hi';

export default function Powerful_features() {
  return (
    <div className='px-4 pt-[80px]'>
        <div className='max-w-[1250px] m-auto'>
            <p className='text-[14px] leading-[21px] text-[#66bb66] font-bold text-center'>POWERFUL FEATURES</p>
            <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold text-center mt-6'>Turn On, Tune In, Drop Out</p>
            <div className='flex justify-center'>
                <p className='text-[#555] text-[16px] leading-[22px] sm:text-[22px] sm:leading-[31px] text-center mt-3'>TRY OUR FIRST DOSE!</p>
            </div>
            <div className='mt-9 hidden flex-wrap'>
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
                        <p className='text-[#555] text-[20px] leading-[24px] sm:text-[22px] sm:leading-[31px] mt-3'>AI Scribbler consults the latest research and cites in APA, MLA, or Harvard style</p>
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
            <div className='flex flex-wrap my-10 max-w-[1100px] mx-auto items-stretch'>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full'>
                        <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-cyan-400 bg-cyan-50'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-lightning-charge text-cyan-400" viewBox="0 0 16 16">
                                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                            </svg>
                        </div>
                        <p className='text-[24px] font-extrabold my-1'>Write content faster</p>
                        <p className='text-[18px] text-[#6b7280]'>You do not need to spend hours to write good content - let our advanced AI Writer to get it done.</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full '>
                        <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-yellow-400 bg-yellow-50'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cpu text-yellow-400" viewBox="0 0 16 16">
                                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                            </svg>
                        </div>
                        <p className='text-[24px] font-extrabold my-1'>Tools and templates</p>
                        <p className='text-[18px] text-[#6b7280]'>Using our Ai tools and pre-built templates to create content briefs, write and optimize content in one place.</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full'>
                        <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-blue-400 bg-blue-50'>
                            <HiOutlineLightBulb className='text-[24px] text-blue-400'/>
                        </div>
                        <p className='text-[24px] font-extrabold my-1'>Brainstorm faster</p>
                        <p className='text-[18px] text-[#6b7280]'>Use our advanced AI as your endless work for your business.</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full'>
                        <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-purple-400 bg-purple-50'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-earmark-text fill-purple-400" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                            </svg>
                        </div>
                        <p className='text-[24px] font-extrabold my-1'>Copy and publish anywhere</p>
                        <p className='text-[18px] text-[#6b7280]'>You can simply copy your desire content and then you can publish, like Shopify, Wordpress, or anywhere</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full'>
                        <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-green-400 bg-green-50'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-recycle fill-green-400 relative left-[1px] top-[-1px]" viewBox="0 0 16 16">
                                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
                            </svg>
                        </div>
                        <p className='text-[24px] font-extrabold my-1'>Repurpose content easily</p>
                        <p className='text-[18px] text-[#6b7280]'>Create appealing and awe-inspiring content for the viewers.</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full'>
                        <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-pink-400 bg-pink-50'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-fonts fill-pink-400" viewBox="0 0 16 16">
                                <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z"/>
                            </svg>
                        </div>
                        <p className='text-[24px] font-extrabold my-1'>Write in Any Language</p>
                        <p className='text-[18px] text-[#6b7280]'>Let Ai write for you in over 40 languages. Our AI can write in English, Spanish, French, and many more languages.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
