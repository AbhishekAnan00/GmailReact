import React, { useState } from 'react'
import { HiPencil } from "react-icons/hi2";
import SidebarOption from './SidebarOption';
import { MdInbox, MdOutlineGifBox } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { BiSend } from "react-icons/bi";
import { LuFile } from "react-icons/lu";
import { LuMails } from "react-icons/lu";
import { BsChatSquareText } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiSpamLine } from "react-icons/ri";
import { BiCaretRight } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";
import { MdLabelImportantOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../redux/EmailSlice';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inboxOnClick = () => {
    navigate("/")
  }
  const sendOnClick = () => {
    navigate("/sent")
  }
    return (
    <div className='mt-4 w-[250px]'>
      <div className="ml-2 h-[40px] w-[160px] flex justify-center text-xl place-items-center bg-secondary rounded-2xl pt-8 pb-8 gap-2 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() =>dispatch(openSendMessage())}>
      <HiPencil />
       <p>compose</p>
      </div>
     <div className='mt-2'>
      <SidebarOption icon={<MdOutlineGifBox onClick={inboxOnClick} />} title={"Inbox"} number={"24"} isActive={true} />
      <SidebarOption icon={<MdOutlineStarBorderPurple500 />} title={"Starred"} number={"24"}/>
      <SidebarOption icon={<GoClock />} title={"Clock"} number={"24"}/>
      <SidebarOption icon={<BiSend onClick={sendOnClick} />} title={"Sent"} number={"24"}/>
      <SidebarOption icon={<BsChatSquareText />} title={"Chats"} number={"24"}/>
      <SidebarOption icon={<LuFile />} title={"Draft"} number={"24"}/>
      <SidebarOption icon={<MdExpandMore />} title={"More"} number={24}/>
      <SidebarOption icon={<MdLabelImportantOutline />} title={"Important"} number={24}/>
      <SidebarOption icon={<LuMails />} title={"All Mail"} number={"24"}/>
      <SidebarOption icon={<RiSpamLine />} title={"Spam"} number={"24"}/>
      <SidebarOption icon={<RiDeleteBin6Line />} title={"Bin"} number={"24"}/>
     <div  className='flex font-semibold text-lg ml-3 mt-2'>
      <p><BiCaretRight /></p>
      <span>Categories</span>
     </div>
      <SidebarOption icon={<IoSettingsOutline />} title={"Manage labels"} />
      <SidebarOption icon={<FaPlus />} title={"Create new label"}/>
     </div>
     <div className='flex justify-between w-[230px] text-xl ml-2 font-semibold mt-5 opacity-[0.8]'>
      <p>Labels</p>
      <p><FaPlus /></p>
     </div>
    </div>
  )
}

export default Sidebar