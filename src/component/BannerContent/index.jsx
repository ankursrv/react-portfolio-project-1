import React from 'react'
import Button from '../Button'
const BannerContent = () => {
    return (
        <div className='grid grid-cols-2 max-w-[1200px] px-5 mx-auto relative'>
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
                <Button text='Contact me' />
            </div>
            <div className='absolute -right-24 max-w-[730px] top-8'>
                <img src="/images/girl.png" alt="banner image" className='w-full object-cover' />
            </div>

        </div>
    )
}

export default BannerContent
