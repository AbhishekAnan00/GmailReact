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
const EmailBody = ({ name, subject, message, time, email, id }) => {
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
        className="flex justify-between items-center h-[40px] hover:shadow-lg transition-all duration-300"
        onClick={handleOnClick}
        onMouseEnter={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
      >
        <div className="flex text-lg ml-3 gap-5 font-semibold place-items-center w-[20%]">
          <MdOutlineCheckBoxOutlineBlank className="text-stone-400 font-semibold" />
          {user.starred === "true" ? (
            <MdOutlineStarOutline
              className="text-stone-400 font-semibold cursor-pointer"
              onClick={starEmail}
            />
          ) : (
            <MdOutlineStarPurple500 />
          )}
          <p>{name}</p>
        </div>
        <div className=" text-lg flex text-left gap-2 w-[60%]">
          <p className="font-semibold">{subject}</p>
          <p className="font-normal">{message}</p>
        </div>
        {display && (
          <div className="text-left w-[10%] cursor-pointer">
            <RiDeleteBin6Line onClick={deleteEmail} />
          </div>
        )}
        <div className="font-medium text-lg text-right mr-2 w-[5%]">{time}</div>
      </div>
      <hr />
    </>
  );
};
export default EmailBody;
