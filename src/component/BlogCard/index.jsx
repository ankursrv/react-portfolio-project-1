import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import Icon from '../Icon';

const BlogCard = ({ images, user, date, title, discription }) => {
    return (
        <div className='rounded-2xl overflow-hidden blog-card w-full'>
            <figure className=' overflow-hidden'>
                <img className='transition-all duration-300 h-[250px]' src={images} alt="" />
            </figure>
            <div className='bg-white p-[30px] hover:bg-black hover:text-white transition-all duration-300'>
                <div className='text-lg font-medium flex items-center justify-between mb-5'>
                    <label>By {user}</label>
                    <label>{date}</label>
                </div>
                <h3 className='text-[26px] font-medium leading-8 mb-[10px]'>{title}</h3>
                <p className='text-lg line-clamp-2'>{discription}</p>
                <div className='flex items-center text-lg mt-11'>
                    Read More
                    <Icon icon={<FaArrowUp />} className='read-more-icon'  /> 
                    
                </div>
            </div>
        </div>
    )
}

export default BlogCard
