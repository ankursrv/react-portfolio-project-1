import { useState, useEffect } from "react";
import Data from "./Data";
import FilterButtons from "./FilterButtons";
import React from 'react'
import Section from '../Section'
import { FaArrowUp } from "react-icons/fa6";
import Icon from '../Icon';

const Portfolio2 = () => {
    const [displayData, setDisplayData] = useState(Data.items);
    const [active, setActive] = useState("all");
    const [animationClass, setAnimationClass] = useState("zoomIn");

    useEffect(() => {
        // Apply zoomIn animation on render
        setAnimationClass("zoomIn");
    }, [displayData]); // Trigger effect when displayData changes

    const handleCategoryClick = (category) => {
        if (category === active) return;
        setActive(category);

        // Apply zoomOut before filtering
        setAnimationClass("zoomOut");

        setTimeout(() => {
            if (category === "all") {
                setDisplayData(Data.items);
            } else {
                const filteredData = Data.items.filter(item => item.category.includes(category));
                setDisplayData(filteredData);
            }
        }, 400); // Match the zoomOut animation duration (400ms)
    };

  return (
      <Section id='portfolio' title='Check my Portfolio' className='py-[100px]'>
          <FilterButtons active={active} handleClick={handleCategoryClick} />

          <div className="flex columns-4 flex-wrap gap-4 h-[570px]">
              {displayData.map((project, i) => (
                  <div key={i} className={`portfolio-card relative hover:z-[40] cursor-pointer hover:scale-115 transition-all shadow-shadow-primary h-[265px] w-[265px] ${animationClass}`}
                  >
                      <img src={project.media} className='rounded-2xl w-full h-full object-cover' alt="" />
                      <div className='portfolio-card-info left-6 p-[10px] bg-white rounded-[10px] bg-clip-padding backdrop-filter backdrop-blur-[7.5px] bg-opacity-40 absolute bottom-0 opacity-0 transition-all duration-200 shadow-shadow-secondary w-3/4'>
                          <p className='mb-[10px] text-[26px] leading-8'>{project.name}</p>
                          {/* <Button text=' Project Details' icon={<FaArrowUp />} /> */}
                          <button className='text-[10px] flex items-center justify-center'>
                              Project Details <Icon icon={<FaArrowUp />} />
                          </button>
                      </div>
                  </div>
                //   <img src={img} className="rounded" alt="nothing" width="100%" />
              ))}
          </div>
    </Section>
  )
}

export default Portfolio2
