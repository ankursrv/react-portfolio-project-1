import React from 'react'


const Button = ({ text, action, icon, className }) => {
  return (
    <button onClick={action} id='contact-me' className="contact-me sm:text-lg text-black-primary bg-white px-[15px] h-12 rounded-md flex items-center justify-center relative z-20 before:content-[''] before:absolute before:bg-orange-primary before:w-full before:-z-10 before:h-full overflow-hidden before:-left-44 before:transition-all before:duration-500 hover:before:left-0">
      {text}
      <div className={`${className ? className : ''} icon text-[10px] ml-[10px] bg-orange-primary flex items-center justify-center p-[6px] rounded-full transition-colors hover:bg-white `}>
        {icon}
      </div>
    </button>
  )
}

export default Button
