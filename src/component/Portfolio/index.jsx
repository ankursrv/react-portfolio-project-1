import React from 'react'

import Section from '../Section'
import { projectData } from '../Data'       // Import Data component
import FilterData from './FilterData';      // Filter Data component
import Icon from '../Button/Icon'


const Portfolio = () => {
    return (
        <div>
            <Section id="portfolio" className='py-[100px]' title='Check my Protfolio' bgColor='light'>
                <FilterData />
                <div className='grid md:grid-cols-4 gap-5'>
                    {
                        projectData.map((portItem, index) => (
                            <div className='portfolio-card relative hover:z-[40] cursor-pointer hover:scale-115 transition-all shadow-shadow-primary' key={index}>
                                <img src={`/images/${portItem.portfolioImage}`} className='rounded-2xl' alt="" />
                                <div className='portfolio-card-info left-6 p-[10px] bg-white rounded-[10px] bg-clip-padding backdrop-filter backdrop-blur-[7.5px] bg-opacity-40 absolute bottom-0 opacity-0 transition-all duration-200 shadow-shadow-secondary w-3/4'>
                                    <p className='mb-[10px] text-[26px] leading-8'>{portItem.portfolioTitle}</p>
                                    <button className='text-[10px] flex items-center justify-center'>
                                        {portItem.portfolioInfo}
                                        <Icon />
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </Section>
        </div>
    )
}

export default Portfolio
