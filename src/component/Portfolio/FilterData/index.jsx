import React, { useState } from 'react'

const portfolioItems = [
    {
        name: 'All',
        id: 'all'
    },
    {
        name: 'Products',
        id: 'Products'
    },
    {
        name: 'Web Pages',
        id: 'Web Pages'
    },
    {
        name: 'Web Apps',
        id: 'Web Apps'
    },
    {
        name: 'Mobile Apps',
        id: 'Mobile Apps'
    },

]
const FilterData = ({ filterProjects }) => {
    const [activeFillBg, setActiveFillBg] = useState("")

    const clickHandler = (id) => {
        setActiveFillBg(id)
        filterProjects(id);
    }
    return (
        <ul className='text-white text-[22px] flex justify-center my-[30px]'>
            {
                portfolioItems.map((item) => (
                    <li
                        className={`px-5 py-[10px] leading-none ${item.id === activeFillBg ? 'activeFillBg' : ''}`}
                        key={item.id}
                        onClick={()=> clickHandler(item.id)}
                        >
                        {item.name}
                    </li>
                ))
            }
        </ul>
    )
}

export default FilterData
