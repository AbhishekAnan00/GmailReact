import React, { useEffect, useState } from "react";
import EmailCount from "./EmailCount";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";
import { fireDB } from "../firebase";
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { HiPencil } from "react-icons/hi2";
import { openSendMessage } from "../redux/EmailSlice";

const EmailList = (props) => {
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
  return (
    <>
      <div className=" bg-white w-[1100px] rounded-2xl  width-all:w-[1100px] width-all:absolute width-all:ml-[250px] phone-sm:absolute phone-sm:left-0 phone-sm:w-full mt-2 phone-sm:z- -inset-020">
        <EmailCount count={messageCount} />
        <EmailType />
        {email
          .filter((data) =>
            data.data.search.toLowerCase().includes(props.search)
          )
          .map((email) => (
            <EmailBody
              key={email.id}
              id={email.id}
              name={email.data.fromName}
              email={email.data.fromEmail}
              subject={email.data.search}
              message={email.data.text}
              time={new Date().toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
              })}
            />
          ))}
      </div>
      <div
        className=" ml-2 h-[40px] w-[160px] flex justify-center text-xl place-items-center bg-blue-200 rounded-2xl pt-8 pb-8 gap-2 hover:shadow-lg transition-all duration-300 cursor-pointer phone-sm:fixed phone-sm:bottom-2 phone-sm:right-2 width-all:hidden phone-sm:flex"
        onClick={() => dispatch(openSendMessage())}
      >
        <HiPencil />
        <p>compose</p>
      </div>
    </>
  );
};

export default EmailList;
