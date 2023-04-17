import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import influencer1 from './videos/Influencer1.mp4';
import influencer2 from './videos/influencer2.mp4';
import bottom_nav_profile  from './images/bottom_nav_profile.webp';
import liked1 from './images/liked1.webp';
import liked2 from './images/liked2.webp';
import influencer_pic1 from './images/influencer_pic1.webp';
import influencer_pic2 from './images/influencer_pic2.webp';
import influencer_pic3 from './images/influencer_pic3.webp';

import step3icon1 from './images/step3icon1.webp';
import step3icon2 from './images/step3icon2.webp';
import step3icon3 from './images/step3icon3.webp';
import step3icon4 from './images/step3icon4.webp';



export default function Influencer_program() {
    const [acc, setAcc] = React.useState("");
    const [chevron, setChevron] = React.useState("50px");
    

    const videoRef1 = React.useRef();
    React.useEffect(() => {
        const videoElement1 = videoRef1.current;
        videoElement1.play();
    });
    const videoRef2 = React.useRef();
    React.useEffect(() => {
        const videoElement2 = videoRef2.current;
        videoElement2.play();
    });


    const handleAcc = (id) => {
        if(acc === id){
            setAcc("");
        }else{
            setAcc(id);
        }
    }
// var topOffset = 0;
//         window.addEventListener('scroll', () => {
//             var topOffset = "-" + window.pageYOffset + "px";
//             console.log(topOffset);
//         });


  return (
    <div>
        <Navbar/>
        <div className='px-4 py-[80px]'>
            <div className='pt-[50px]'>
                <p className='text-center text-[30px] leading-[35px] sm:text-[57px] sm:leading-[63px] font-extrabold text-[#0a001f] tracking-tighter'>Get paid 💸 to create</p>
                <p className='text-center text-[22px] leading-[31px] text-[#555] mt-5 max-w-[700px] m-auto'>Join the Jenni influencer program and earn money for your posts. Earn up to $5,000 per post.</p>
            </div>
            <div className='max-w-[288px] h-[595px] mx-auto mt-10 border-[#292929] border-[10px] rounded-[46px] overflow-hidden relative'>
                <div className="z-0 transition-all relative top-[-50px]">
                    <video ref={videoRef1} autoPlay loop className='z-0 w-full cursor-pointer'>
                        <source src={influencer1}/>
                    </video>
                    <div className='bg-white'>
                        <div className='flex items-center justify-between px-2 h-[32px]'>
                            <div className='w-[80px] shrink-0 flex justify-between items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="#EE4444" height="20" width="20" fill="#EE4444">
                                    <g color="#EE4444" weight="fill">
                                        <path d="M176,32a60,60,0,0,0-48,24A60,60,0,0,0,20,92c0,71.9,99.9,128.6,104.1,131a7.8,7.8,0,0,0,3.9,1,7.6,7.6,0,0,0,3.9-1,314.3,314.3,0,0,0,51.5-37.6C218.3,154,236,122.6,236,92A60,60,0,0,0,176,32Z"></path>
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 0, 0)" height="20" width="20">
                                    <g color="rgb(0, 0, 0)" weight="regular">
                                        <path d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16">
                                        </path>
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 0, 0)" height="20" width="20">
                                    <g color="rgb(0, 0, 0)" weight="regular">
                                        <path d="M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
                                        <line x1="110.9" y1="145.1" x2="156.1" y2="99.9" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 0, 0)" height="20" width="20">
                                    <g color="rgb(0, 0, 0)" weight="regular">
                                        <path d="M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
                                        <line x1="110.9" y1="145.1" x2="156.1" y2="99.9" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className='flex items-center px-2 h-[32px] mb-4'>
                            <div className=' flex justify-between items-center'>
                                <div className='w-[28px] h-[28px] flex items-center justify-center rounded-full bg-white'>
                                    <div className='w-[24px] h-[24px] rounded-full bg-center bg-cover' style={{backgroundImage:`url(${liked1})`}}></div>
                                </div>
                                <div className='w-[28px] h-[28px] flex items-center justify-center rounded-full bg-white ml-[-10px]'>
                                    <div className='w-[24px] h-[24px] rounded-full bg-center bg-cover' style={{backgroundImage:`url(${liked2})`}}></div>
                                </div>
                            </div>
                            <div className='ml-2'>
                                <p className='text-[10px] leading-[15px] text-[#696969]'>Liked by <b>collegehero</b> and <b>80k others</b></p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <img src={influencer_pic1} alt="" className='w-full'/>
                    </div>
                </div>
                <div className='flex flex-col justify-between z-1 absolute top-0 w-full h-full'>
                    <div className='px-5 py-3 bg-white/90 flex items-center justify-between'>
                        <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(51, 51, 51)" height="20" width="20" className='mr-2'>
                                <g color="rgb(51, 51, 51)" weight="bold">
                                    <polyline points="160 208 80 128 160 48" fill="none" stroke="rgb(51, 51, 51)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline>
                                </g>
                            </svg>
                            <div className='font-medium'>
                                <p className='text-[12px] leading-[16px]'>@whoisaiscribbler</p>
                                <p className='text-[10px] leading-[13px] text-[#b5b5b5]'>All posts</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#b5b5b5" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </div>
                    <div className='hidden items-center h-[60px] justify-evenly bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(51, 51, 51)" height="24" width="24">
                            <g color="rgb(51, 51, 51)" weight="regular">
                                <path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" fill="none" stroke="rgb(51, 51, 51)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
                            </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(51, 51, 51)" height="24" width="24">
                            <g color="rgb(51, 51, 51)" weight="bold">
                                <circle cx="116" cy="116" r="84" fill="none" stroke="rgb(51, 51, 51)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle>
                                <line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="rgb(51, 51, 51)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                            </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(51, 51, 51)" height="24" width="24">
                            <g color="rgb(51, 51, 51)" weight="regular">
                                <path d="M228.1,121.2,84.2,33.2A8,8,0,0,0,72,40V216a8,8,0,0,0,12.2,6.8l143.9-88A7.9,7.9,0,0,0,228.1,121.2Z" fill="none" stroke="rgb(51, 51, 51)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
                            </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(51, 51, 51)" height="24" width="24">
                            <g color="rgb(51, 51, 51)" weight="regular">
                                <circle cx="128" cy="128" r="96" fill="none" stroke="rgb(51, 51, 51)" stroke-miterlimit="10" stroke-width="16"></circle>
                                <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="rgb(51, 51, 51)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                                <line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="rgb(51, 51, 51)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                            </g>
                        </svg>
                        <div className='h-[24px] w-[24px] rounded-full bg-center bg-cover' style={{backgroundImage:`url(${bottom_nav_profile})`}}></div>
                    </div>
                </div>
            </div>
            <div className='pt-[50px]'>
                <p className='text-center text-[30px] leading-[35px] sm:text-[57px] sm:leading-[63px] font-extrabold text-[#0a001f] tracking-tighter'>Get started in 3 easy steps</p>
                <p className='text-center text-[22px] leading-[31px] text-[#555] mt-5 max-w-[700px] m-auto'>Earning with Jenni is simple, follow the steps below to kickstart your affiliate income</p>
            </div>

            <div className='max-w-[900px] mx-auto mt-[70px] md:flex gap-[50px]'>
                <div className='md:w-1/2'>
                    <div className='md:max-w-[350px] rounded-[50px] overflow-hidden bg-center bg-cover h-[500px]' style={{backgroundImage:`url(${influencer_pic2})`}}></div>
                </div>
                <div className='md:w-1/2 flex items-center mt-5 md:mt-0'>
                    <div>
                        <p className='text-[14px] leading-[21px] text-[#5533AC] font-bold'>STEP ONE</p>
                        <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold'>Create</p>
                        <div className=''>
                            <p className='text-[#555] text-[16px] leading-[22px] sm:text-[22px] sm:leading-[31px] mt-3'>Do what you do best, pull out your phone and start creating! </p>
                            <p className='text-[#555] text-[16px] leading-[22px] sm:text-[22px] sm:leading-[31px] mt-3'>Need some inspo? Take a look at some <u className='text-[#33ADFF] cursor-pointer'>content examples.</u></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[900px] mx-auto mt-[70px] md:flex gap-[50px]'>
                <div className='md:w-1/2 order-2 flex justify-end'>
                    <div className='md:max-w-[288px] border-[#292929] border-[10px] rounded-[46px] overflow-hidden relative'>
                        <div className="z-0 transition-all">
                            <video ref={videoRef2} autoPlay loop className='z-0 w-full cursor-pointer'>
                                <source src={influencer2}/>
                            </video>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 flex items-center order-1 mt-5 md:mt-0'>
                    <div>
                        <p className='text-[14px] leading-[21px] text-[#5533AC] font-bold'>STEP TWO</p>
                        <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold tracking-tighter'>Share</p>
                        <div className=''>
                            <p className='text-[#555] text-[16px] leading-[22px] sm:text-[22px] sm:leading-[31px] mt-3'>Create content for your audience. Be sure to tag us and use #AIScribbler.</p>
                            <p className='text-[#555] text-[16px] leading-[22px] sm:text-[22px] sm:leading-[31px] mt-3'>We accept content from <u className='text-[#33ADFF] cursor-pointer'>TikTok</u>,&nbsp;<u className='text-[#33ADFF] cursor-pointer'>Instagram</u>&nbsp;&&nbsp;<u className='text-[#33ADFF] cursor-pointer'>Twitter</u></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[900px] mx-auto mt-[70px] md:flex gap-[50px]'>
                <div className='md:w-1/2'>
                    <div className='md:max-w-[400px] rounded-[50px] overflow-hidden bg-center bg-cover h-[500px]' style={{backgroundImage:`url(${influencer_pic3})`}}></div>
                </div>
                <div className='md:w-1/2 flex items-center mt-5 md:mt-0'>
                    <div>
                        <p className='text-[14px] leading-[21px] text-[#5533AC] font-bold'>STEP THREE</p>
                        <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold'>Get Paid</p>
                        <div className=''>
                            <p className='text-[#555] text-[16px] leading-[22px] sm:text-[22px] sm:leading-[31px] mt-3'>We'll send you $1 for every 1,000 views your post receives. Minimum payout $20 (20k views).</p>
                            <p className='text-[#555] text-[16px] leading-[22px] sm:text-[22px] sm:leading-[31px] mt-3'>DM us on IG/TikTok or email us after posting your video and get paid via the payment method of your choice.</p>
                            <div className='flex items-center mt-6'>
                                <div className='w-[40px] h-[40px]'><img src={step3icon1} alt=""  className='w-full'/></div>
                                <div className='w-[40px] h-[40px] mx-3'><img src={step3icon2} alt=""  className='w-full'/></div>
                                <div className='w-[40px] h-[40px]'><img src={step3icon3} alt=""  className='w-full'/></div>
                                <div className='w-[40px] h-[40px]'><img src={step3icon4} alt=""  className='w-full ml-3'/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-4 py-[80px] bg-[#FAFAFC]'>
            <div className='max-w-[1250px] m-auto'>
                {/* <p className='text-[14px] leading-[21px] text-blue-500 font-bold text-center'>SUPPORT</p> */}
                <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold text-center mt-6'>Questions, answered!</p>
                <div className='flex justify-center'>
                    <p className='text-[#555] text-[22px] leading-[31px] text-center mt-3 w-[700px]'>Answers to common questions. Can't find what you're looking for? Email us at info@aiscribbler.ai</p>
                </div>
                <div className='my-12 max-w-[800px] m-auto'>
                    <div className={ chevron === 1 ? 'transition-all' : 'bg-white rounded-xl shadow-lg' }>
                        <div className='p-5 flex justify-between items-center cursor-pointer' onMouseOver={()=>setChevron(1)} onMouseOut={()=>setChevron("")} onClick={()=>handleAcc(1) }>
                            <p className='text-[17px] font-bold text-[#222]'>Is there a max payout cap?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class={ chevron === 1 ? (acc === 1 ? "fill-[#222] transition-all rotate-180" : "fill-[#222] rotate-0 transition-all") : "fill-[#b1b1b1] transition-all" } viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                        <div className={ acc === 1 ? 'px-5 pb-5 h-full' : 'h-0 overflow-hidden' }>
                            <p className='text-[16px] text-[#666]'>We cap the maximium payout at $5,000 USD. This is for videos that reach 5 million views and above.</p>
                        </div>
                    </div>
                    <div className={ chevron === 2 ? 'transition-all my-2 hidden' : 'bg-white rounded-xl shadow-lg my-2 hidden' }>
                        <div className='p-5 flex justify-between items-center cursor-pointer' onMouseOver={()=>setChevron(2)} onMouseOut={()=>setChevron("")} onClick={()=>handleAcc(2) }>
                            <p className='text-[17px] font-bold text-[#222]'>Which country do you pay in?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class={ chevron === 2 ? (acc === 2 ? "fill-[#222] transition-all rotate-180" : "fill-[#222] rotate-0 transition-all") : "fill-[#b1b1b1] transition-all" } viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                        <div className={ acc === 2 ? 'px-5 pb-5 h-full' : 'h-0 overflow-hidden' }>
                            <p className='text-[16px] text-[#666]'>We cap the maximium payout at $5,000 USD. This is for videos that reach 5 million views and above.</p>
                        </div>
                    </div>
                    <div className={ chevron === 3 ? 'transition-all mt-2' : 'bg-white rounded-xl shadow-lg mt-2' }>
                        <div className='p-5 flex justify-between items-center cursor-pointer' onMouseOver={()=>setChevron(3)} onMouseOut={()=>setChevron("")} onClick={()=>handleAcc(3) }>
                            <p className='text-[17px] font-bold text-[#222]'>Which country do you pay in?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class={ chevron === 3 ? (acc === 3 ? "fill-[#222] transition-all rotate-180" : "fill-[#222] rotate-0 transition-all") : "fill-[#b1b1b1] transition-all" } viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                        <div className={ acc === 3 ? 'px-5 pb-5 h-full' : 'h-0 overflow-hidden' }>
                            <p className='text-[16px] text-[#666]'>We will pay you in USD $.</p>
                        </div>
                    </div>
                    <div className={ chevron === 4 ? 'transition-all my-2' : 'bg-white rounded-xl shadow-lg my-2' }>
                        <div className='p-5 flex justify-between items-center cursor-pointer' onMouseOver={()=>setChevron(4)} onMouseOut={()=>setChevron("")} onClick={()=>handleAcc(4) }>
                            <p className='text-[17px] font-bold text-[#222]'>How will you pay me?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class={ chevron === 4 ? (acc === 4 ? "fill-[#222] transition-all rotate-180" : "fill-[#222] rotate-0 transition-all") : "fill-[#b1b1b1] transition-all" } viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                        <div className={ acc === 4 ? 'px-5 pb-5 h-full' : 'h-0 overflow-hidden' }>
                            <p className='text-[16px] text-[#666]'>We can pay you in Cashapp, Venmo, PayPal, Crypto, Zelle, Bank Transfer, or Carrier Pigeon.

Simply let us know what works best for you.</p>
                        </div>
                    </div>
                    <div className={ chevron === 5 ? 'transition-all' : 'bg-white rounded-xl shadow-lg' }>
                        <div className='p-5 flex justify-between items-center cursor-pointer' onMouseOver={()=>setChevron(5)} onMouseOut={()=>setChevron("")} onClick={()=>handleAcc(5) }>
                            <p className='text-[17px] font-bold text-[#222]'>When do I get paid?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class={ chevron === 5 ? (acc === 5 ? "fill-[#222] transition-all rotate-180" : "fill-[#222] rotate-0 transition-all") : "fill-[#b1b1b1] transition-all" } viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                        <div className={ acc === 5 ? 'px-5 pb-5 h-full transition-all' : 'px-5 h-0 overflow-hidden transition-all' }>
                            <p className='text-[16px] text-[#666]'>We measure the content performance within 14 days of upload. You will receive a payout that is reflective of the content views within the 14 day window.

Payments will be processed within 30 days of the 14 day window ending.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-4 py-[80px]'>
            <div className='max-w-[1250px] m-auto'>
                <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold text-center mt-6'>Join the program and start earning</p>
                <div className='flex justify-center'>
                    <p className='text-[#555] text-[22px] leading-[31px] text-center mt-3 w-[700px]'>Create your first piece of content and grow your influencer income with AI Scribbler.</p>
                </div>
                <div  className='flex justify-center mt-10'>
                <Link to="/register">
                    <button className='rounded-xl text-[20px] sm:text-[24px] text-white font-semibold px-5 py-3 bg-green-600  hover:outline outline-[5px] outline-green-200 hover:transition-all'>View Content Example</button>
                </Link>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
