import React, { useState } from "react";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineMood } from "react-icons/md";
import { RiDriveLine } from "react-icons/ri";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { FaPenClip } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "../redux/EmailSlice";
import { fireDB } from "../firebase";
import { Timestamp, addDoc, collection, doc } from "firebase/firestore";
import { selectUser } from "../redux/UserSlice";

const Compose = () => {
  const [to, setTo] = useState("");
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
   const formSubmit = (e) => {
    e.preventDefault();
    if (to === "" || search === "" || text === "") {
      alert("all fields are required");
    }
      const emailStore = {
      to: to,
      search: search,
      text: text,
      time: Timestamp.now(),
      fromEmail: user.email,
      fromName : user.displayName
    };
    const useRef = collection(fireDB, "emailStore");
      addDoc(useRef, emailStore)
      setTo("");
      setSearch("");
      setText("");
      alert("email sent succesful");
      dispatch(closeSendMessage());

}
  return (
    <div className="fixed bottom-0 right-[150px] w-[450px]  flex flex-col shadow-2xl rounded-t-xl bg-white">
      <div className="flex justify-between bg-primary p-3 rounded-t-xl font-semibold">
        <span>New Message</span>
        <span className="flex gap-2 cursor-pointer">
          <HiMiniMinusSmall onClick={() => dispatch(closeSendMessage())} />
          <MdOutlineCloseFullscreen />
          <RxCross2 onClick={() => dispatch(closeSendMessage())} />
        </span>
      </div>
      <form onSubmit={formSubmit}>
      <div className="pl-2 pr-2">
        <div className="p-2 text-lg">
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Recepients"
            className="w-full outline-none border-none p-2"
          />
          <hr />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full outline-none border-none p-2"
          />
          <hr />
          <textarea
            cols="50"
            rows="12"
            className="outline-none"
            onChange={(e) => setText(e.target.value)}
          >
            {text}
          </textarea>
        </div>
      </div>
      <div className="flex justify-between p-3">
        <div className="flex gap-4">
          <div>
            <button
              className=" bg-blue-600 hover:bg-blue-500 text-white p-2 font-bold rounded-full w-[100px]"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="flex gap-2 justify-center place-items-center text-xl text-stone-800">
            <MdOutlineMood />
            <RiDriveLine />
            <MdOutlineInsertPhoto />
            <FaPenClip />
            <SlOptionsVertical />
          </div>
        </div>
        <div className="flex place-items-center text-xl text-stone-800">
          <RiDeleteBin6Line />
        </div>
      </div>
      </form>
    </div>
  );
};

export default Compose;
