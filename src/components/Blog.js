import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Blog_component from './Blog_component'

export default function Blog() {
  return (
    <div>
        <Navbar/>
        <h1 className='pt-[150px] pb-12 text-[57px] leading-[63px] text-center text-[#0a001f] font-extrabold'>Blog</h1>
        <Blog_component/>
        <Footer/>
    </div>
  )
}
