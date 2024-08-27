import React, { useState } from 'react'

import Section from '../Section'
import FilterData from './FilterData';      // FilterData component
import Showcase from './Showcase';          // Showcase component

const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["web-app", "mobile-app"],
        media: "/images/thumb-7.jpg",
    },
    {
        id: 2,
        name: "Anna & Daniel",
        tags: ["web-page"],
        media: "/images/thumb-2.jpg",
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: "/images/thumb-8.jpg",
    },
    {
        id: 4,
        name: "Business Analytics Web App",
        tags: ["web-app", "mobile-app"],
        media: "/images/thumb-1.jpg",
    },
    {
        id: 5,
        name: "Limitless",
        tags: ["web-app", "web-page"],
        media: "/images/thumb-6.jpg",
    },
    {
        id: 6,
        name: "Dashboard",
        tags: ["product", "web-app", "mobile-app"],
        media: "/images/thumb-4.jpg",
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: "/images/thumb-3.jpg",
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: "/images/thumb-5.jpg",
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData)
    const [transition, setTransition] = useState(false)

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };
    return (
        <div>
            <Section id="portfolio" className='py-[100px]' title='Check my Protfolio' bgColor='light'>
                <FilterData filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </Section>
        </div>
    )
}

export default Portfolio
