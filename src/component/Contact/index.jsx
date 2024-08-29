
import React from 'react'
import Section from '../Section'
const Contact = () => {
        
    return (
        <Section id='contact' bgColor='' title='Any Question? Feel Free to Contact'>
            <section className="">
                <div className=" mx-auto  mt-[75px]">
                    <div className="flex gap-8">
                        {/* <!-- Contact Info --> */}
                        <div className="bg-gray-primary text-gray-300 p-[30px] rounded-lg  w-[355px]">
                            <p className="mb-4 leading-[34px] text-text-clr-pirmary font-medium text-[22px]">
                                I would be happy to answer any questions you may have about freelance writing or content marketing!
                            </p>
                            <div className="flex items-center mb-[15px]">
                                <span className="text-yellow-500">
                                    {/* <!-- Phone Icon --> */}
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                                </span>
                                <span className='text-white ml-[15px]'>+91 1234567891</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-yellow-500">
                                    {/* <!-- Email Icon --> */}
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
                                </span>
                                <span className='text-white ml-[15px]'>example@gmail.com</span>
                            </div>
                        </div>

                        {/* <!-- Contact Form --> */}
                        <div className='flex-1'>
                            <form className=" grid grid-cols-2 gap-5 mb-[20px]">
                                <input type="text" id="name" placeholder="Name" className="bg-transparent px-5 py-[10px] h-[57px] rounded-md text-white outline-none focus:ring-1 focus:ring-white border-border-gray border text-lg" />


                                <input type="email" placeholder="Email" className="bg-transparent px-5 py-[10px] h-[57px] rounded-md text-white outline-none focus:ring-1 focus:ring-white border-border-gray border text-lg " />


                                <input type="text" placeholder="Phone" className="bg-transparent px-5 py-[10px] h-[57px] rounded-md text-white outline-none focus:ring-1 focus:ring-white border-border-gray border text-lg " />


                                <input type="text" placeholder="Subject" className="bg-transparent px-5 py-[10px] h-[57px] rounded-md text-white outline-none focus:ring-1 focus:ring-white border-border-gray border text-lg " />
                            </form>
                            <textarea placeholder="Your message" rows={3} className="bg-transparent px-5 py-[10px] rounded-md text-white outline-none focus:ring-1 focus:ring-white border-border-gray border text-lg w-full"></textarea>
                            <button type="submit" className="bg-white text-black-primary py-3 px-4 rounded-md font-medium text-lg mt-5">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </Section>
    )
}

export default Contact






