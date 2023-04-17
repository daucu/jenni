import React from 'react';
import { cross, logo, menu } from './Svg';
import leaf from './images/leaf.png';
import { Link } from 'react-router-dom';
import navLogo from './images/logo.png';

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
  return (
    <div className={ open ? 'px-4 fixed shadow-lg w-full bg-white z-10 overflow-hidden h-[300px] transition-all duration-500'  : 'px-4 fixed shadow-lg w-full bg-white z-10 overflow-hidden h-[82px] md:h-[60px] transition-all duration-500'}>
        <div className='max-w-[1250px] m-auto flex items-center justify-between h-[82px] md:h-[60px]'>
            <Link to="/" className='w-[110px] h-[40px] flex items-center shrink grow basis-0'>
                {/* <img src={leaf} alt="" className='h-[36px]' style={{transform:'rotateY(180deg)'}}/> */}
                <img src={navLogo} alt="" className='h-[28px] lg:h-[36px] relative top-[-2px]'/>
                <p className='font-black text-[24px] lg:text-[30px] ml-2 tracking-tighter text-[#422099]'>AI</p>
                <p className='font-black text-[24px] lg:text-[30px] ml-2 tracking-tighter text-black'>SCRIBBLER</p>
            </Link>
            <ul className='md:flex items-center font-medium text-[16px] text-[#0a001f] shrink-0 grow-0 hidden px-4'>
                <Link to="/pricing" className='p-2 lg:p-3 hover:text-[#7452C9] transition-all cursor-pointer'>Pricing</Link>
                <Link to="/tools" className='mx-2 lg:mx-4 p-2 lg:p-3 hover:text-[#7452C9] transition-all cursor-pointer'>Tools</Link>
                <Link to="/about" className='p-2 lg:p-3 hover:text-[#7452C9] transition-all cursor-pointer'>About</Link>
                <Link to="/blog" className='ml-2 lg:ml-4 p-2 lg:p-3 hover:text-[#7452C9] transition-all cursor-pointer'>Blog</Link>
            </ul>
            <div className='flex items-center justify-end shrink grow basis-0'>
                <Link to="/login" className='p-3 hover:text-[#7452C9] transition-all cursor-pointer mr-4 hidden lg:flex'>Log In</Link>
                <Link to="/register" className={ open ? "hidden" : 'rounded-md text-[13px] text-white font-medium px-3 py-2 bg-green-600 hover:outline outline-[5px] outline-green-200 transition-all hidden sm:block md:hidden' }>Sign up</Link>
                <Link to="/register">
                    <button className='rounded-md text-[16px] text-white font-medium px-3 py-2 bg-green-600 hover:outline outline-[5px] outline-green-200 transition-all hidden md:block'>Start writing for free</button>
                </Link>
                <div className={ open ? "hidden" : "ml-2 cursor-pointer md:hidden" } onClick={()=>setOpen(true)}>{menu}</div>
                <div className={ open ? "ml-2 cursor-pointer md:hidden" : "hidden" } onClick={()=>setOpen(false)}>{cross}</div>
            </div>
        </div>
        <div className='pb-12'>
            <Link to="/register"><button className={'rounded-md text-[13px] text-white font-medium px-3 py-2 bg-green-600 hover:outline outline-[5px] outline-green-200 transition-all md:hidden w-full text-center' }>Start writing for free</button></Link>
            <ul className='font-medium text-[16px] text-[#0a001f] w-full text-center mt-4'>
                <div className='my-2'>
                    <Link to="/login" className='p-3 hover:text-[#7452C9] transition-all cursor-pointer w-full'>Login</Link>
                </div>
                <div className='my-2'>
                    <Link to="/pricing" className='p-3 hover:text-[#7452C9] transition-all cursor-pointer'>Pricing</Link>
                </div>
                <div className='my-2'>
                    <Link to="/tools" className='p-3 hover:text-[#7452C9] transition-all cursor-pointer'>Tools</Link>
                </div>
                <div className='my-2'>
                    <Link to="/about" className='p-3 hover:text-[#7452C9] transition-all cursor-pointer'>About</Link>
                </div>
                <div className='my-2'>
                    <Link to="/blog" className='p-3 hover:text-[#7452C9] transition-all cursor-pointer'>Blog</Link>
                </div>
            </ul>
        </div>
    </div>
  )
}
