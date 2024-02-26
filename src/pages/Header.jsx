import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoMdOptions } from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoApps } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, signOut } from "../redux/UserSlice";
import ProfileModel from './ProfileModel';

const Header = (props) => {
  const user = useSelector(selectUser);
  // console.log(user.photoURL);
  const dispatch = useDispatch()

  return (
    <div className="header flex w-full">
      <div className="w-[250px] text-center flex justify-left gap-5 p-4" >
        <div className='h-[40px] text-3xl place-items-center flex justify-center cursor-pointer'><IoMenu /></div>     
      <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="Gmail" className='h-[40px] w-[110px]' />
      </div>
      <div className="flex justify-between place-items-center w-[750px] h-[50px] rounded-2xl bg-primary p-4 mt-4">
      <div className='flex justify-center gap-2'><IoMdSearch className='text-2xl text-stone-700 cursor-pointer'/>
      <input type="text" value={props.search} onChange={(e) => props.setSearch(e.target.value)} placeholder='search mail'className='bg-primary text-xl outline-none'/></div>
     <div className='text-2xl text-stone-600 cursor-pointer'><IoMdOptions /></div>     
      </div>
      <div className="grid grid-cols-3 gap-10 text-2xl mt-6 ml-24 text-stone-500">
      <FaRegCircleQuestion />
      <AiTwotoneSetting />
      <IoApps />
      </div>
      <div className='mt-5 ml-12' >
        <ProfileModel/>
     
        </div>
    </div>
  )
}

export default Header