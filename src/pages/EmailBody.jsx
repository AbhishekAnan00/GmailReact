import React, { useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openEmail } from "../redux/EmailSlice";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { fireDB } from "../firebase";
import { selectUser } from "../redux/UserSlice";
import { MdOutlineStarPurple500 } from "react-icons/md";
const EmailBody = ({ name, subject, message, time, email, id, count }) => {
  const [display, setDisplay] = useState(false);
  const user = useSelector(selectUser);
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
  const deleteEmail = async () => {
    const emailDoc = doc(fireDB, "emailStore", id);
    try {
      await deleteDoc(emailDoc);
    } catch (err) {
      console.error(err);
    }
  };
  const starEmail = async () => {
    const starDoc = doc(fireDB, "emailStore", id);
    try {
      await setDoc(starDoc, {
        fromEmail: user.email,
        fromName: user.displayName,
        id: user.uid,
        starred: "true",
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div
        className="flex justify-between items-center width-all:h-[40px] phone-sm:h-[25px] hover:shadow-lg transition-all duration-300"
        onClick={handleOnClick}
        onMouseEnter={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
      >
        <div className="flex width-all:text-lg width-all:ml-3 phone-sm:text-sm phone-sm:ml-0 phone-sm:gap-2 width-all:gap-5  font-semibold place-items-center phone-sm:w-[100%] width-all:w-[20%]">
          <MdOutlineCheckBoxOutlineBlank className="text-stone-400 font-semibold" />
          {user.starred === "true" ? (
            <MdOutlineStarOutline
              className="text-stone-400 font-semibold cursor-pointer"
              onClick={starEmail}
            />
          ) : (
            <MdOutlineStarPurple500 />
          )}
          <p className="phone-sm:text-[12px] width-all:text-lg">{name}</p>
        </div>
        <div className=" width-all:text-lg flex items-center phone-sm:w-[100%] text-left gap-2 width-all:w-[60%]">
          <p className="font-semibold phone-sm:text-[14px] width-all:text-lg">
            {subject}
          </p>
          <p className="font-normal phone-sm:text-[10px] width-all:text-lg">
            {message.slice(0, 10)}...
          </p>
        </div>
        {display && (
          <div className="text-left w-[10%] cursor-pointer">
            <RiDeleteBin6Line onClick={deleteEmail} />
          </div>
        )}
        <div className="font-medium text-lg phone-sm:hidden phone-md:hidden width-all:block text-right mr-2 width-all:w-[10%]">
          {time}
        </div>
      </div>
      <hr />
    </>
  );
};
export default EmailBody;
