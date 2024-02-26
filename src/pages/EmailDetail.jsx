import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { TbCaretDownFilled } from "react-icons/tb";
import { IoReloadSharp } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { openEmail, selectedEmail } from "../redux/EmailSlice";
import { selectUser } from "../redux/UserSlice";
const EmailDetail = () => {
  const user = useSelector(selectUser);
  const emailData = useSelector(selectedEmail);
  // console.log(emailData);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="bg-white w-[1100px] rounded-2xl">
      <div className="flex justify-between mt-3 p-3">
        <div className="flex gap-8 text-xl text-stone-700 cursor-pointer">
          <IoArrowBack onClick={handleClick} />
          <TbCaretDownFilled />
          <IoReloadSharp />
          <SlOptionsVertical />
        </div>
        <div className="flex gap-8">
          <div className="text-stone-500">
            <p>1-50 of 65</p>
          </div>
          <div className="flex text-2xl gap-5">
            <RxCaretLeft />
            <RxCaretRight />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="text-3xl text-stone-700 pl-16">{emailData.name}</div>
        <div className="flex flex-col">
          <div className="flex items-center ml-4 gap-2">
            <div className="h-12 w-12">
              <img
                src={user.photoURL}
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="flex justify-between pr-32 w-full">
             <span className="flex items-center"> <p className="font-semibold text-lg">{emailData.subject}</p>{user.email}</span>
              <p className="text-md font-normal text-stone-400">
                {emailData.time}
              </p>
            </div>
          </div>
          <div className="pl-16 pr-28 text-md text-stone-400">
            <p>{emailData.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
