import React from 'react';

export default function Support() {
    const [acc, setAcc] = React.useState("");
    const [chevron, setChevron] = React.useState("");

    const handleAcc = (id) => {
        if(acc === id){
            setAcc("");
        }else{
            setAcc(id);
        }
    }
  return (
    <div className='px-4 py-[80px] bg-[#FAFAFC]'>
        <div className='max-w-[1250px] m-auto'>
            <p className='text-[14px] leading-[21px] text-[#BB67CC] font-bold text-center'>SUPPORT</p>
            <p className='text-[38px] leading-[46px] sm:text-[46px] sm:leading-[51px] text-[#0a001f] font-extrabold text-center mt-6'>Frequently asked questions</p>
            <div className='my-12 max-w-[800px] m-auto'>
                <div className={ chevron === 1 ? 'transition-all' : 'bg-white rounded-xl shadow-lg' }>
                    <div className='p-5 flex justify-between items-center cursor-pointer' onMouseOver={()=>setChevron(1)} onMouseOut={()=>setChevron("")} onClick={()=>handleAcc(1) }>
                        <p className='text-[17px] font-bold text-[#222]'>Does Jenni use GPT4?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class={ chevron === 1 ? (acc === 1 ? "fill-[#222] transition-all rotate-180" : "fill-[#222] rotate-0 transition-all") : "fill-[#b1b1b1] transition-all" } viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <div className={ acc === 1 ? 'px-5 pb-5 h-full' : 'h-0 overflow-hidden' }>
                        <p className='text-[16px] text-[#666]'>Jenni is currently the most advanced writing system. We use a combination of our own in-house AI systems, GPT4 and ChatGPT. Fine-tune controls and custom data from each user to generate the highest quality content on the market.</p>
                    </div>
                </div>
                <div className={ chevron === 2 ? 'transition-all my-2' : 'bg-white rounded-xl shadow-lg my-2' }>
                    <div className='p-5 flex justify-between items-center cursor-pointer' onMouseOver={()=>setChevron(2)} onMouseOut={()=>setChevron("")} onClick={()=>handleAcc(2) }>
                        <p className='text-[17px] font-bold text-[#222]'>What are citations?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class={ chevron === 2 ? (acc === 2 ? "fill-[#222] transition-all rotate-180" : "fill-[#222] rotate-0 transition-all") : "fill-[#b1b1b1] transition-all" } viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <div className={ acc === 2 ? 'px-5 pb-5 h-full' : 'h-0 overflow-hidden' }>
                        <p className='text-[16px] text-[#666]'>Jenni's citation feature can be toggled on and off when needed.

Citations are sources from across the web that relate to your content. When writing blogs these can be links to related articles. When writing essays, citations can be links to related research papers.

You can cite in APA, MLA, Harvard and more!</p>
                    </div>
                </div>
                <div className={ chevron === 3 ? 'transition-all' : 'bg-white rounded-xl shadow-lg' }>
                    <div className='p-5 flex justify-between items-center cursor-pointer' onMouseOver={()=>setChevron(3)} onMouseOut={()=>setChevron("")} onClick={()=>handleAcc(3) }>
                        <p className='text-[17px] font-bold text-[#222]'>Is Jenni multilingual?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class={ chevron === 3 ? (acc === 3 ? "fill-[#222] transition-all rotate-180" : "fill-[#222] rotate-0 transition-all") : "fill-[#b1b1b1] transition-all" } viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <div className={ acc === 3 ? 'px-5 pb-5 h-full' : 'h-0 overflow-hidden' }>
                        <p className='text-[16px] text-[#666]'>Yes, you may generate text in your desired language and use our translate feature to switch between languages.</p>
                    </div>
                </div>
                <div className={ chevron === 4 ? 'transition-all my-2' : 'bg-white rounded-xl shadow-lg my-2' }>
                    <div className='p-5 flex justify-between items-center cursor-pointer' onMouseOver={()=>setChevron(4)} onMouseOut={()=>setChevron("")} onClick={()=>handleAcc(4) }>
                        <p className='text-[17px] font-bold text-[#222]'>Is there mobile support?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class={ chevron === 4 ? (acc === 4 ? "fill-[#222] transition-all rotate-180" : "fill-[#222] rotate-0 transition-all") : "fill-[#b1b1b1] transition-all" } viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <div className={ acc === 4 ? 'px-5 pb-5 h-full' : 'h-0 overflow-hidden' }>
                        <p className='text-[16px] text-[#666]'>Currently Jenni is only available on desktop.</p>
                    </div>
                </div>
                <div className={ chevron === 5 ? 'transition-all' : 'bg-white rounded-xl shadow-lg' }>
                    <div className='p-5 flex justify-between items-center cursor-pointer' onMouseOver={()=>setChevron(5)} onMouseOut={()=>setChevron("")} onClick={()=>handleAcc(5) }>
                        <p className='text-[17px] font-bold text-[#222]'>Does Jenni plagiarize?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class={ chevron === 5 ? (acc === 5 ? "fill-[#222] transition-all rotate-180" : "fill-[#222] rotate-0 transition-all") : "fill-[#b1b1b1] transition-all" } viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <div className={ acc === 5 ? 'px-5 pb-5 h-full transition-all' : 'px-5 h-0 overflow-hidden transition-all' }>
                        <p className='text-[16px] text-[#666]'>Jenni strives to generate content that has 0% plagiarism-free. However, occasionally there may be sentences that Jenni writes that also happen to be on the web.

Jenni has a built-in plagiarism checker allowing you to check your final document before exporting.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
