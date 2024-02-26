import React from 'react'

const SidebarOption = ({icon,title,number,isActive}) => {
  return (
    <div className={`w-[230px] h-[40px] rounded-r-full hover:bg-gray-200 cursor-pointer ${isActive && "bg-tertiary" }`}>
      <div className='flex place-items-center ml-6'>
      <div className='text-[20px]'>
       {icon}
      </div>
      <div className='flex justify-between w-full p-2 '>
      <p>{title}</p>
      <p>{number}</p>
      </div>
      </div>
    </div>
  )
}

export default SidebarOption