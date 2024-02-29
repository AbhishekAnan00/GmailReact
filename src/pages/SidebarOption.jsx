import { collection, onSnapshot, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fireDB } from "../firebase";

const SidebarOption = ({ icon, title, showCount }) => {
  const [color, setColor] = useState(false);
  const [email, setEmail] = useState([]);
  const dispatch = useDispatch();
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
  const handleOnClick = () => {
    setColor(!color);
  };
  return (
    <div
      className="w-[230px] h-[40px] rounded-r-full hover:bg-gray-200 cursor-pointer"
      onClick={handleOnClick}
      style={{ backgroundColor: color ? "#c2e7ff" : "#eaf1fb" }}
    >
      <div className="flex place-items-center ml-6">
        <div className="text-[20px]">{icon}</div>
        <div className="flex justify-between w-full p-2 ">
          <p>{title}</p>
          {showCount && <p>{messageCount}</p>}
        </div>
      </div>
    </div>
  );
};

export default SidebarOption;
