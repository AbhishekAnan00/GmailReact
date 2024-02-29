import React, { useEffect, useState } from "react";
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
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import { fireDB } from "../firebase";
const EmailDetail = () => {
  const [email, setEmail] = useState([]);
  useEffect(() => {
    const emailCollection = collection(fireDB, "emailStore");
    const getSnap = onSnapshot(
      emailCollection,
      orderBy("TimeStamp", "desc"),
      (snapshot) => {
        const emailData = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setEmail(emailData);
      }
    );
  }, []);
  const messageCount = email.length;
  //user database
  const user = useSelector(selectUser);
  const emailData = useSelector(selectedEmail);
  // console.log(emailData);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="bg-white w-[1100px] phone-sm:w-full rounded-2xl phone-sm:mt-2 width-all:w-[1100px] width-all:absolute width-all:ml-[250px] phone-sm:absolute phone-sm:left-0">
      <div className="flex justify-between mt-3 p-3">
        <div className="flex gap-8 phone-sm:text-sm width-all:text-xl text-stone-700 cursor-pointer">
          <IoArrowBack onClick={handleClick} />
          <TbCaretDownFilled />
          <IoReloadSharp />
          <SlOptionsVertical />
        </div>
        <div className="flex items-center place-items-center width-all:gap-8 phone-sm:gap-0">
          <div className="text-stone-900 phone-sm:text-sm width-all:text-lg">
            <p>
              {" "}
              0 - {messageCount} of {messageCount}
            </p>
          </div>
          <div className="flex width-all:text-2xl phone-sm:text-sm gap-5 text-stone-500">
            <RxCaretLeft />
            <RxCaretRight />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="width-all:text-3xl phone-sm:text-xl text-stone-700 phone-sm:pl-10 width-all:pl-16">
          {emailData.name}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center width-all:ml-4 phone-sm:ml-2 phone-sm:gap-0 width-all:gap-2">
            <div className="h-12 w-12">
              <img
                src={user.photoURL}
                className="width-all:w-12 width-all:h-12 rounded-full phone-sm:w-6 phone-sm:h-6"
              />
            </div>
            <div className="flex justify-between width-all:pr-32 w-full phone-sm:pr-2">
              <span className="flex items-center width-all:text-lg phone-sm:text-sm gap-4">
                {" "}
                <p className="font-semibold width-all:text-lg phone-sm:text-sm">
                  {emailData.subject}
                </p>
                {user.email}
              </span>
              <p className="width-all:text-lg phone-sm:text-sm font-normal text-stone-400">
                {emailData.time}
              </p>
            </div>
          </div>
          <div className="width-all:pl-16 pr-28 phone-sm:pl-10 phone-sm:text-sm width-all:text-md width-all:text-lg text-stone-400">
            <p>{emailData.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
