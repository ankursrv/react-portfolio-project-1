import BannerContent from '../BannerContent'
import Button from '../Button'
import { FaArrowUp } from "react-icons/fa6";

const navItems = [
    {
        name: 'Skills',
        href: '/'
    },
    {
        name: 'Portfolio',
        href: '/portfolio'
    },
    {
        name: 'Blogs & Articles',
        href: '/blogs'
    },
]

const Header = () => {
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
                            navItems.map((item, index) => (
                                <li key={index} className="px-[5px] relative z-20 before:content-[''] before:absolute before:bg-white hover:text-black transition-all duration-500 before:w-full before:-z-10 before:h-full overflow-hidden before:-left-44 before:transition-all before:duration-500 hover:before:left-0">{item.name}</li>
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
