import React, { useState } from 'react'
import Section from '../Section'
import Button from '../Button'
import { LiaCloudUploadAltSolid } from "react-icons/lia";

const Skill = () => {
    const [show, setShow] = useState(true)
    return (
        <>
            <Section id='skill' className='skill' bgColor='dark'>
                <div className='flex flex-col md:flex-row items-center gap-10 md:gap-20 '>
                    <div className='flex flex-wrap justify-center md:justify-start md:w-2/6 space-y-4 md:space-y-0  md:order-0'>
                        <img src="/images/tech-icons.png" alt="" />
                    </div>
                    <div className='md:w-[60%] md:order-1 order-1 text-center md:text-start'>
                        <h2 className='text-[42px] font-bold text-white mb-[30px]'>Skills</h2>
                        <p className='text-white text-lg leading-6 mb-[15px] md:pr-12'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        </p>
                        <div className='flex justify-center md:justify-start'>
                            <Button text='Download CV' action={() => setShow(!show)} icon={<LiaCloudUploadAltSolid />} />
                        </div>
                        {
                            show && (
                                <div className='text-white'>
                                    Show Div And Hide div
                                </div>
                            )
                        }
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Skill

