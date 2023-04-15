import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import about from './images/about.webp';
import v1 from './images/blog_img/v1.webp';
import v2 from './images/blog_img/v2.webp';
import v3 from './images/blog_img/v3.webp';
import v4 from './images/blog_img/v4.webp';
import v5 from './images/blog_img/v5.webp';
import v6 from './images/blog_img/v6.webp';
import v7 from './images/blog_img/v7.webp';
import v8 from './images/blog_img/v8.webp';
import founder1 from './images/founder1.png';
import founder2 from './images/founder2.png';

export default function About() {
  return (
    <div>
        <Navbar/>
        <div className='px-4 pt-[150px]'>
          <div className='text-[25px] leading-[30px] sm:text-[57px] sm:leading-[63px] font-extrabold max-w-[1050px] m-auto text-[#0a001f] text-center'>"Stay hungry, stay foolish"</div>
          <div className='text-[25px] leading-[30px] font-extrabold max-w-[1050px] mx-auto mt-6 text-[#0a001f] text-center'>Founders</div>
          <div className='mt-[80px] sm:flex gap-10 max-w-[800px] m-auto'>
            <div className='w-1/2'><img src={founder1} alt="" className='h-full w-full'/></div>
            <div className='w-1/2 mt-10 sm:mt-0'><img src={founder2} alt="" className='w-full h-full'/></div>
          </div>
          <div className='text-[25px] leading-[30px] sm:text-[57px] sm:leading-[63px] font-extrabold max-w-[1050px] mx-auto text-[#0a001f] my-[70px] text-center'>Our Philosophy;)</div>
          <p className='text-[18px] text-[#555555] text-center max-w-[1000px] mx-auto  mb-[70px]'>As I imagine, so it becomes, and this is the very essence of magic. In a cybernian way, we are becoming gods, digital gods, a marriage
of biology and technology. Friends, I am convinced ofthis hypothesis. I am reminded of Kevin Kelly's notion of how impoverished
the world would have been withoutthe technology ofthe musical instrumentin time for Beethoven, or the technology ofthe oil
painting in time for Van Gogh. No doubt, some may see it as cheating, as a shortcutthat we can type a few words and turn them into
some Phantasmagoric text. Butimagine whatthe right words can give rise to. The new engineer is the prompt engineer. You know,
Terence McKenna, said, The world is made of words. And if you know the words the world is made of, you can make of it whatever
you wish. First,there was the Word and the Word was God. Itruly believe thatthe full flourishing ofthese technological couplings at
their very best willturn all of us into the central character in the never-ending story. As we imagine, so it becomes. And this is the
very essence of magic .</p>
          <div className='hidden flex-wrap my-10 max-w-[1100px] mx-auto'>
                <div className='w-full sm:w-1/2 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FBBF24" class="bi bi-lightning-charge" viewBox="0 0 16 16">
                              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                            </svg>
                        </div>
                        <p className='text-[32px] leading-[38px] text-[#0A001F] font-bold my-2'>Be Bold</p>
                        <p className='text-[18px] text-[#555555]'>We are ambitious and non-complacent. We have a hunger to achieve against great odds. We believe that making big bold bets is better than inaction.</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FBBF24" class="bi bi-lightning-charge" viewBox="0 0 16 16">
                              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                            </svg>
                        </div>
                        <p className='text-[32px] leading-[38px] text-[#0A001F] font-bold my-2'>Be Bold</p>
                        <p className='text-[18px] text-[#555555]'>We are ambitious and non-complacent. We have a hunger to achieve against great odds. We believe that making big bold bets is better than inaction.</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FBBF24" class="bi bi-lightning-charge" viewBox="0 0 16 16">
                              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                            </svg>
                        </div>
                        <p className='text-[32px] leading-[38px] text-[#0A001F] font-bold my-2'>Be Bold</p>
                        <p className='text-[18px] text-[#555555]'>We are ambitious and non-complacent. We have a hunger to achieve against great odds. We believe that making big bold bets is better than inaction.</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FBBF24" class="bi bi-lightning-charge" viewBox="0 0 16 16">
                              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                            </svg>
                        </div>
                        <p className='text-[32px] leading-[38px] text-[#0A001F] font-bold my-2'>Be Bold</p>
                        <p className='text-[18px] text-[#555555]'>We are ambitious and non-complacent. We have a hunger to achieve against great odds. We believe that making big bold bets is better than inaction.</p>
                    </div>
                </div>
          </div>
          <div className='text-[25px] leading-[30px] sm:text-[57px] sm:leading-[63px] font-extrabold max-w-[1050px] mx-auto text-[#0a001f] my-[70px] hidden'><p className='max-w-[900px]'>Our Team</p></div>
          <div className='hidden flex-wrap my-10 max-w-[1100px] mx-auto'>
                <div className='w-full sm:w-1/2 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl flex items-center'>
                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-4 shrink-0'>
                            <img src={v1} alt="" className='h-full w-full'/>
                        </div>
                        <div>
                            <p className='text-[32px] leading-[38px] text-[#0A001F] font-bold'>David Park</p>
                            <p className='text-[18px] text-[#555555]'>CEO</p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl flex items-center'>
                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-4 shrink-0'>
                            <img src={v2} alt="" className='h-full w-full'/>
                        </div>
                        <div>
                            <p className='text-[32px] leading-[38px] text-[#0A001F] font-bold'>Henry Mao</p>
                            <p className='text-[18px] text-[#555555]'>CTO</p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl flex items-center'>
                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-4 shrink-0'>
                            <img src={v3} alt="" className='h-full w-full'/>
                        </div>
                        <div>
                            <p className='text-[32px] leading-[38px] text-[#0A001F] font-bold'>Dandy Ling</p>
                            <p className='text-[18px] text-[#555555]'>Engineer</p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl flex items-center'>
                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-4 shrink-0'>
                            <img src={v4} alt="" className='h-full w-full'/>
                        </div>
                        <div>
                            <p className='text-[32px] leading-[38px] text-[#0A001F] font-bold'>Marc Astbury</p>
                            <p className='text-[18px] text-[#555555]'>Designer</p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl flex items-center'>
                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-4 shrink-0'>
                            <img src={v5} alt="" className='h-full w-full'/>
                        </div>
                        <div>
                            <p className='text-[32px] leading-[38px] text-[#0A001F] font-bold'>Hemant Saini</p>
                            <p className='text-[18px] text-[#555555]'>Engineer</p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl flex items-center'>
                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-4 shrink-0'>
                            <img src={v6} alt="" className='h-full w-full'/>
                        </div>
                        <div>
                            <p className='text-[32px] leading-[38px] text-[#0A001F] font-bold'>Youngjin Ma</p>
                            <p className='text-[18px] text-[#555555]'>Community</p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl flex items-center'>
                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-4 shrink-0'>
                            <img src={v7} alt="" className='h-full w-full'/>
                        </div>
                        <div>
                            <p className='text-[32px] leading-[38px] text-[#0A001F] font-bold'>Hrushikesh Chapke</p>
                            <p className='text-[18px] text-[#555555]'>Engineer</p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl flex items-center bg-[#F0FFF9]'>
                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-4 shrink-0'>
                            <img src={v8} alt="" className='h-full w-full'/>
                        </div>
                        <div>
                            <p className='text-[32px] leading-[38px] text-[#0A001F] font-bold'>You?</p>
                            <p className='text-[18px] text-[#555555]'>Apply Today</p>
                        </div>
                    </div>
                </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
