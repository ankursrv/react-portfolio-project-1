import { useState } from 'react';
import BannerContent from '../BannerContent'
import Button from '../Button'
import { FaArrowUp } from "react-icons/fa6";

const navItems = [
    {
        id: 1,
        name: 'Skills',
        href: '/',
    },
    {
        id: 2,
        name: 'Portfolio',
        href: '/portfolio',
    },
    {
        id: 3,
        name: 'Blogs & Articles',
        href: '/blogs',
    },
]

const Header = () => {
    const [active, setActive] = useState(navItems[0].name)
    return (
        <section className='bg-my-gradient h-screen relative'>
            <img src="/images/vector-background.png" alt="" className='absolute opacity-60' />
            <img src="/images/cloud-soft.png" alt="" className='absolute bottom-0 opacity-35 w-full z-10' />
            <img src="/images/cloud.png" alt="" className='absolute bottom-0 w-full z-10' />
            <header className='max-w-[1200px] px-5 mx-auto flex justify-between pt-[60px]'>
                <figure className='max-w-36'>
                    <img src="images/logo.png" alt="logo" />
                </figure>
                <nav className='flex items-center space-x-6'>
                    <ul className='md:flex hidden text-white text-lg space-x-5'>
                        {
                            navItems.map((item) => (
                                <li key={item.id} className={`px-[5px] relative z-20 transition-all hover:shadow-shadow-tertary hover:text-black-primary duration-500 cursor-pointer ${active === item.name ? 'active' : ''}`} onClick={() => setActive(item.name)} >{item.name}</li>
                            ))
                        }
                    </ul>
                    <Button text='Contact me' icon={<FaArrowUp />} className='rotate-45' />
                </nav>
            </header>
            <BannerContent />
        </section>

    )
}

export default Header
