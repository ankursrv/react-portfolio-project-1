import React from 'react'

const Section = ({ children, id, className, title, bgColor }) => {
    return (
        <div id={id || ""} className={` ${className ? className : ""} ${bgColor === "dark" ? "dark" : "light"}`}>
            <div className='max-w-[1200px] px-5 mx-auto'> 
                {
                    title && (
                        <div>
                            <h2 className='text-[42px] font-bold text-white text-center'>{title}</h2>
                        </div>
                    )
                }
                {children}
            </div>
        </div>
    )
}

export default Section
