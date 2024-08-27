import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

const Showcase = ({ data, transition }) => {
    return (
        <div className='flex columns-4 flex-wrap gap-4'>
            {
                data.map((project) => (
                    <div key={project.name} className={`portfolio-card relative hover:z-[40] cursor-pointer hover:scale-115 transition-all shadow-shadow-primary h-[265px] w-[265px] 
                      ${transition === "zoomout"
                            ? "zoomOut"
                            : transition === "zoomin"
                            ? "zoomIn"
                            : ""
                        }`}
                    >
                        <img src={project.media} className='rounded-2xl w-full h-full object-cover' alt="" />
                        <div className='portfolio-card-info left-6 p-[10px] bg-white rounded-[10px] bg-clip-padding backdrop-filter backdrop-blur-[7.5px] bg-opacity-40 absolute bottom-0 opacity-0 transition-all duration-200 shadow-shadow-secondary w-3/4'>
                            <p className='mb-[10px] text-[26px] leading-8'>{project.name}</p>
                            <button className='text-[10px] flex items-center justify-center' icon={<FaArrowUp />}>
                                Project Details

                            </button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Showcase
