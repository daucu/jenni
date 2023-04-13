import React from 'react';
import b1 from './images/blog_img/b1.webp';
import b2 from './images/blog_img/b2.webp';
import b3 from './images/blog_img/b3.webp';
import b4 from './images/blog_img/b4.webp';
import b5 from './images/blog_img/b5.webp';
import { Link } from 'react-router-dom';

export default function Blog_component() {
const blogs = [
    {
        id: 1,
        title: 'How to Write in MLA Essay Format (With Examples)',
        category: 'Guide',
        image: b1,
        date: "Apr 14, 2023"
    },
    {
        id: 2,
        title: 'How to Write in an Essay in APA Format (With Examples)',
        category: 'Guide',
        image: b2,
        date: "Apr 18, 2023"
    },
    {
        id: 3,
        title: 'How to Write a Reflection Essay | (Outlines and Examples)',
        category: 'Guide',
        image: b3,
        date: "Apr 16, 2023"
    },
    {
        id: 4,
        title: 'Powerful Persuasive Essay Examples That Will Spark Your Creativity',
        category: 'Guide',
        image: b4,
        date: "Apr 14, 2023"
    },
    {
        id: 5,
        title: 'How to Write Essays about Immigration',
        category: 'Guide',
        image: b5,
        date: "Apr 10, 2023"
    },
]
  return (
    <div className='px-4'>
        <div className='max-w-[1000px] m-auto'>
            {blogs.map((item) => {return(
            <Link to="/blog-single" className='flex my-10'>
                <div className='w-[300px] mr-6 bg-center bg-cover rounded-xl grow-0 shrink-0 hidden sm:block' style={{backgroundImage:`url(${item.image})`}}>
                </div>
                <div>
                    <p className='text-[22px] leading-[31px] text-[#7755cc]'>{item.category}</p>
                    <p className='text-[35px] leading-[45px] sm:text-[50px] sm:leading-[60px] text-[#0a001f] font-extrabold mt-3'>{item.title}</p>
                    <p className='text-[22px] leading-[31px] text-[#999] mt-3'>{item.date}</p>
                </div>
            </Link>);})}
        </div>
    </div>
  )
}
