import React from 'react'
import Button from '../Button'
import { FaUser } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { BsFillAwardFill } from "react-icons/bs";

const BannerContent = () => {
    return (
        <div className='grid lg:grid-cols-2 max-w-[1200px] px-5 mx-auto relative'>
            <div className='mt-9'>
                <h1 className='flex flex-col'>
                    <span className='flex text-[42px] leading-[48px] text-white'>
                        Hello <img src="/images/hand.png" className='ml-[10px]' alt="hand" />, I Am
                    </span>
                    <span className='text-[62px] leading-[75px] text-white'>JS Dev Hindi</span>
                </h1>
                <p className='text-lg text-white my-[25px] md:pr-36'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                </p>
                <Button text='Contact me' className='rotate-45' icon={<FaArrowUp />} />
            </div>
            <div className='absolute -right-24 max-w-[730px] top-6'>
                <img src="/images/girl.png" alt="banner image" className='w-full object-cover' />
                <div className='w-[135px] bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-[7.5px] bg-opacity-40 absolute z-10 top-20 right-20 p-5 flex flex-col items-center justify-center text-center'>
                    <div className='w-14 min-w-14 h-14 bg-orange-primary rounded-full flex items-center justify-center text-2xl'>
                        <FaUser />
                    </div>
                    <div className='mt-[10px]'>
                        <h5 className='font-bold text-lg'>4k+</h5>
                        <label className='text-sm'>Happy Customers</label>
                    </div>
                </div>
                <div className='max-w-52 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-[7.5px] bg-opacity-40 absolute z-10 top-72 left-30 p-5 flex items-center justify-center'>
                    <div className='w-14 min-w-14 h-14 bg-orange-primary rounded-full flex items-center justify-center text-2xl'>
                        <BsFillAwardFill />
                    </div>
                    <div className='pl-[10px]'>
                        <label className='text-lg'>Best Design Award</label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BannerContent
