import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Tools() {
  return (
    <div>
        <Navbar/>
        <div className='px-4 pt-[120px] bg-[#FAFAFC]'>
        <div className='max-w-[1250px] m-auto'>
            <p className='text-[14px] leading-[21px] text-[#F6AD2D] font-bold text-center'>USE CASES</p>
            <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold text-center mt-6'>Transform Your Content Creation with AI</p>
            <div className='flex justify-center'>
                <p className='text-[#555] text-[22px] leading-[31px] text-center mt-3 w-[700px]'>Create high-quality content faster and easier than ever before using the power of artificial intelligence technology.</p>
            </div>
            <div className='flex flex-wrap my-10 max-w-[1100px] mx-auto items-stretch'>

                
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm border border-white flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Blog Outline</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Generate blog outline from a given topic</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm border border-white flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Blog Headline</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Maintaining a blog is a proven way to drive traffic to website through SEO.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm border border-white flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Blog Description</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Generate description ideas for your articles and blog posts.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm border border-white flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Blog Story Ideas</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>A great tool to create blog stories that people love the most..</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm border border-white flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Article Content</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Create appealing and awe-inspiring content for the viewers.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-file-text" viewBox="0 0 16 16">
                                        <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Paragraph</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>You can use any one-word keywords to create an engaging paragraph.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>


                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-file-text" viewBox="0 0 16 16">
                                        <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Summarization</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Tool that represents most important information from original content.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Product Name</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Generate short, catchy names with a state of the art language model</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Product Description</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>That enables you to create beautiful & effective product descriptions that sell.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='text-[12px] font-medium rounded-sm flex justify-center items-center text-white'>TM</div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Startup Name</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Generate brandable business / startup name using artificial intelligence</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hotel-service" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8.5 10a1.5 1.5 0 0 1 -1.5 -1.5a5.5 5.5 0 0 1 11 0v10.5a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2c0 -1.38 .71 -2.444 1.88 -3.175l4.424 -2.765c1.055 -.66 1.696 -1.316 1.696 -2.56a2.5 2.5 0 1 0 -5 0a1.5 1.5 0 0 1 -1.5 1.5z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Service Review</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Write Service Reviews based on the provider name and service name</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                        <path d="M10 9l5 3l-5 3z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>YouTube Video Titles</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Write YouTube video titles that will attract viewers.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>


                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                        <path d="M10 9l5 3l-5 3z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>YouTube Video Tags</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Tell us about the amazing ones in the video</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                        <path d="M10 9l5 3l-5 3z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>YouTube Video Outline</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Generate youtube video outline from a video title</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                        <path d="M10 9l5 3l-5 3z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>YouTube Video Intro</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Write interesting intro script for your youtube video</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                        <path d="M10 9l5 3l-5 3z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>YouTube Video Ideas</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Create your video content with the help of AI</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                        <path d="M10 9l5 3l-5 3z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>YouTube Short Script</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Create the perfect script for your next viral Youtube Shorts.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-writing" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z"></path>
                                        <path d="M16 7h4"></path>
                                        <path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Write for me</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Continue and complete my unfinished paragraph.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>


                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-www" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                                        <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                                        <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
                                        <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                                        <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                                        <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
                                        <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                                        <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                                        <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Website Meta Description</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Write SEO friendly meta description for your website.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-www" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                                        <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                                        <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
                                        <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                                        <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                                        <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
                                        <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                                        <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                                        <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Website Meta Keywords</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Write SEO friendly meta keywords for your website.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-www" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                                        <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                                        <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
                                        <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                                        <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                                        <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
                                        <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                                        <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                                        <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Website Meta Title</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Write SEO friendly meta title for your website.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ticket" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M15 5l0 2"></path>
                                        <path d="M15 11l0 2"></path>
                                        <path d="M15 17l0 2"></path>
                                        <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Event Promotion Email</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Write email to promote your event</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Twitter Writer</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Write a tweet on the latest news</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-presentation" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 4l18 0"></path>
                                        <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"></path>
                                        <path d="M12 16l0 4"></path>
                                        <path d="M9 20l6 0"></path>
                                        <path d="M8 12l3 -3l2 2l3 -3"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>AI Presentation Content</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Write an engaging presentation content</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>


                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-question-mark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path>
                                        <path d="M12 19l0 .01"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Ask a Question</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Get answer to all your questions</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-dashboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M4 4h6v8h-6z"></path>
                                        <path d="M4 16h6v4h-6z"></path>
                                        <path d="M14 12h6v8h-6z"></path>
                                        <path d="M14 4h6v4h-6z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Landing Page</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Write hero text & description</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ad" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                                        <path d="M7 15v-4a2 2 0 0 1 4 0v4"></path>
                                        <path d="M7 13l4 0"></path>
                                        <path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Website Meta TitleGoogle Ads</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Generate Google Ads descriptions in within seconds</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>AIDA framework</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>The best-known marketing model for tracking the customer journey</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M17 17h-11v-14h-2"></path>
                                        <path d="M6 5l14 1l-1 7h-13"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Product Review</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Greatest approach to guarantee that you get and promote review of the highest caliber.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                                        <path d="M3 7l9 6l9 -6"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>Welcome Email</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Write personalized email to welcome the customer for joining your service / product.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>

                <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-md bg-[#F59E0B] m-auto'>
                                <div className='w-[24px] h-[24px] rounded-sm flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                        <path d="M10 9l5 3l-5 3z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-[24px] font-extrabold my-4 mb-1 text-center'>YouTube Video Description</p>
                            <p className='text-[16px] text-[#111827] leading-[24px] text-center'>Create your video content with the help of AI</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
    
  )
}
