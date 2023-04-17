import React from 'react';
import { Link } from 'react-router-dom';

export default function Use_cases() {
  return (
    <div className='px-4 pt-[80px] bg-[#FAFAFC]'>
        <div className='max-w-[1250px] m-auto'>
            <p className='text-[14px] leading-[21px] text-red-500 font-bold text-center'>USE CASES</p>
            <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold text-center mt-6'>You're in control</p>
            <div className='flex justify-center'>
                <p className='text-[#555] text-[22px] leading-[31px] text-center mt-3 w-[700px]'>Types of content <b>WE</b> can help you with </p>
            </div>
            <div className='flex flex-wrap my-10 max-w-[1100px] mx-auto items-stretch'>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2 hidden'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFAA21" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                                </svg>
                            </div>
                            <p className='text-[24px] font-extrabold my-1 text-center'>Blog</p>
                            <p className='text-[18px] text-[#6b7280] text-center'>Generate Blog Headlines, Outline, Description and Story ideas within blink!</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2 hidden'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFAA21" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                                </svg>
                            </div>
                            <p className='text-[24px] font-extrabold my-1 text-center'>Social Media</p>
                            <p className='text-[18px] text-[#6b7280] text-center'>Write Caption or Description about your content right away for Twitter, Instagram, YouTube etc !</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2 hidden'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFAA21" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                                </svg>
                            </div>
                            <p className='text-[24px] font-extrabold my-1 text-center'>Email</p>
                            <p className='text-[18px] text-[#6b7280] text-center'>Now write Personalised Emails to potential customers or team members within seconds.</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2 hidden'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFAA21" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                                </svg>
                            </div>
                            <p className='text-[24px] font-extrabold my-1 text-center'>Video</p>
                            <p className='text-[18px] text-[#6b7280] text-center'>Get Titles, description,outline, intros and script for your video in less then 5 seconds</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2 hidden'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFAA21" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                                </svg>
                            </div>
                            <p className='text-[24px] font-extrabold my-1 text-center'>Content</p>
                            <p className='text-[18px] text-[#6b7280] text-center'>Write aww inspiring Article, Paragraph and summarisation today ..</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-md text-[14px] text-white font-semibold px-10 py-1 bg-[#FF9F06] hover:transition-all mt-6'>Try</button>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 p-2 hidden'>
                    <div className='px-8 py-6 shadow-lg rounded-xl h-full flex flex-col justify-between'>
                        <div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFAA21" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                                </svg>
                            </div>
                            <p className='text-[24px] font-extrabold my-1 text-center'>Advertisement assistance</p>
                            <p className='text-[18px] text-[#6b7280] text-center'>Get Google Ads description and AIDA Framework with Scribbler in seconds!</p>
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
            </div>
            <div className='flex justify-center'>
                <Link to="/tools">
                    <button className='rounded-md text-[16px] text-white font-medium px-3 py-2 bg-[#F59E0B] hover:outline outline-[5px] outline-yellow-200 transition-all hidden md:block'>More tools</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
