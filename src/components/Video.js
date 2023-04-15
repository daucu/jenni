import React from 'react';
import { rocket, check, quotes } from './Svg';
import video from './videos/scribbler.mp4';

export default function Video() {
    const videoRef = React.useRef(null);
    React.useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.play();
    });
  return (
    <div className='mt-10 mb-[100px] px-4 sm:px-[100px]'>
            <div className=' max-w-[600px] m-auto relative'>
                <video ref={videoRef} autoPlay muted loop className='z-0 rounded-xl shadow-xl w-full'>
                    <source src={video} />
                </video>
                <div className='h-full min-w-full hidden lg:flex flex-col justify-between absolute top-0' style={{zIndex:9}}>
                    <div className='flex justify-end w-full'>
                        <div className='flex items-center bg-[#EBFFEC] px-3 py-2 rounded-md rotate-6 shadow-md relative left-[70px] top-[40px]'>
                            <div>{check}</div>
                            <div className='text-[#1C9F23] text-[18px] leading-[25px]'>Plagiarism Checker</div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='inline-flex items-center bg-[#FFFBEB] px-3 py-2 rounded-md rotate-[-6deg] shadow-md relative left-[-70px]'>
                            <div>{rocket}</div>
                            <div className='text-[#D5701F] text-[18px] leading-[25px]'>+10x writing speed</div>
                        </div>
                    </div>
                    <div className='flex justify-end w-full'>
                        <div className='flex items-center bg-[#E5F5FF] px-3 py-2 rounded-md rotate-6 shadow-md relative left-[-70px] bottom-[40px]'>
                            <div>{quotes}</div>
                            <div className='text-[#54B6F3] text-[18px] leading-[25px]'>In-text citations</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
