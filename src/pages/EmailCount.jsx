import React from 'react'
import { RiCheckboxBlankLine } from "react-icons/ri";
import { TbCaretDownFilled } from "react-icons/tb";
import { IoReloadSharp } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";

const EmailCount = () => {
  return (
    <div className='flex justify-between mt-3 p-3'>
      <div className='flex gap-8 text-xl text-stone-700'>
      <RiCheckboxBlankLine />
      <TbCaretDownFilled />
      <IoReloadSharp />
      <SlOptionsVertical />
      </div>
      <div className='flex gap-8'>
      <div className='text-stone-500'>
       <p>1-50 of 65</p> 
      </div>
      <div className='flex text-2xl gap-5'>
      <RxCaretLeft />
      <RxCaretRight />
      </div>
      </div>
    </div>
  )
}

export default EmailCount
