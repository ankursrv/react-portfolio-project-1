import React from 'react'


const Icon = ({icon, className}) => {
  return (
      <div className={`ml-[10px] bg-orange-primary flex items-center justify-center p-[6px] rounded-full rotate-45 text-[8px] ${className ? className : ''}`}>
          {icon}
    </div>
  )
}

export default Icon
