import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openEmail } from "../redux/EmailSlice";
import { collection, deleteDoc, doc } from "firebase/firestore";
const EmailBody = ({ name, subject, message, time, email }) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(
      openEmail({
        name,
        subject,
        message,
        time,
        email,
      })
    );
    navigate("/email");
  };
  return (
    <>
      <div
        className="flex justify-between items-center h-[40px] hover:shadow-lg transition-all duration-300 cursor-pointer"
        onClick={handleOnClick}
      >
        <div className="flex text-lg ml-3 gap-5 font-semibold place-items-center w-[20%]">
          <MdOutlineCheckBoxOutlineBlank className="text-stone-400 font-semibold" />
          <MdOutlineStarOutline className="text-stone-400 font-semibold" />
          <p>{name}</p>
        </div>
        <div className=" text-lg flex text-left gap-2 w-[60%]">
          <p className="font-semibold">{subject}</p>
          <p className="font-normal">{message.slice(0, 60)}..</p>
        </div>
        <div className="text-left w-[10%]">
          <RiDeleteBin6Line/>
        </div>
        <div className="font-medium text-lg text-right mr-2 w-[5%]">{time}</div>
      </div>
      <hr />
    </>
  );
};

export default EmailBody;
