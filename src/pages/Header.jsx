import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoMdOptions } from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoApps } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signOut } from "../redux/UserSlice";
import ProfileModel from "./ProfileModel";
import Sidebar from "./Sidebar";

const Header = (props) => {
  // console.log(user.photoURL);
  const dispatch = useDispatch();

  return (
    <>
      <div className="header flex items-center w-full">
        {/* <div className="width-all:w-[250px] phone-sm:w-[50px] tab-sm:w-[200px] text-center flex justify-left gap-5 p-4">
          <div className="width-all:h-[40px] phone-sm:h-[20px] phone-sm:text-[25px] width-all:text-3xl width-all:flex width-all:justify-center width-all:items-center cursor-pointer">
            <IoMenu />
          </div>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
            alt="Gmail"
            className="h-[40px] w-[110px] width-all:block phone-sm:hidden"
          />
        </div> */}
        <div className="flex width-all:justify-between phone-sm:justify-evenly w-full width-all:w-[1100px] width-all:ml-[230px]">
          <div className="flex justify-between place-items-center width-all:w-[750px] phone-sm:w-[200px] phone-md:w-[250px] phone-lg:w-[280px] phone-xl:w-[300px] phone-2xl:w-[320px] phone-sm:h-[20px]  width-all:h-[50px] rounded-2xl bg-blue-100 width-all:p-4 phone-sm:p-5 mt-4 width-all:ml-4">
            <div className="flex justify-center items-center phone-sm:gap-0 gap-2">
              <IoMdSearch className="width-all:text-2xl phone-sm:text-md  text-stone-700 cursor-pointer phone-sm:hidden width-all:block" />
              <input
                type="text"
                value={props.search}
                onChange={(e) => props.setSearch(e.target.value)}
                placeholder="search in emails"
                className="bg-blue-100 phone-sm:text-sm width-all:text-xl outline-none phone-sm:w-[150px] ml-5"
              />
            </div>
            <div className="text-2xl phone-sm:hidden text-stone-600 cursor-pointer">
              <IoMdOptions />
            </div>
          </div>
          <div className="width-all:grid width-all:grid-cols-4 phone-sm:flex phone-sm:items-center phone-sm:mt-3 phone-sm:text-sm phone-sm:gap-0 width-all:gap-10 width-all:text-2xl mt-6 text-stone-500">
            <FaRegCircleQuestion className="phone-sm:hidden width-all:block" />
            <AiTwotoneSetting className="phone-sm:hidden width-all:block" />
            <IoApps className="phone-sm:hidden width-all:block" />
            <ProfileModel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
