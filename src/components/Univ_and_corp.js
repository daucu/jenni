import React from 'react';
import Slider from "react-slick";
import slider_meta from './images/slider_meta.webp';
import slider_google from './images/slider_google.webp';
import slider_harvard_univ from './images/slider_harvard_univ.webp';
import slider_cambridge_univ from './images/slider_cambridge_univ.png';
import aston_univ from './images/aston_univ.png';
import slider_mit from './images/slider_mit.webp';

export default function Univ_and_corp() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        
    };
    return (
        <div>
            <div className='flex justify-center'>
                <p className='text-[#555] text-[22px] leading-[31px] text-center '>Trusted by Universities and corporations across the world</p>
            </div>
            <div className='my-10'>
            <Slider {...settings}>
                <div className='h-[40px] px-4 flex justify-center'>
                    <img src={slider_meta} alt="" className='h-[40px] w-[200px]' />
                </div>
                <div className='h-[40px] px-4 flex justify-center'>
                    <img src={slider_google} alt=""  className='h-[40px] w-[118px]'/>
                </div>
                <div className='h-[40px] px-4 flex justify-center'>
                    <img src={slider_harvard_univ} alt=""  className='h-[40px] w-[152px]'/>
                </div>
                <div className='h-[40px] px-4 flex justify-center'>
                    <img src={slider_cambridge_univ} alt=""  className='h-[40px] w-[188px]'/>
                </div>
                <div className='h-[40px] px-4 flex justify-center'>
                    <img src={slider_mit} alt=""  className='h-[40px] w-[77px]'/>
                </div>
                <div className='h-[40px] px-4 flex justify-center'>
                    <img src={aston_univ} alt=""  className='h-[40px] w-[194px]'/>
                </div>
            </Slider>
            </div>
        </div>
      );
}
