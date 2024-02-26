import React, { useEffect, useState } from "react";
import EmailCount from "./EmailCount";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";
import { fireDB } from "../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

const EmailList = (props) => {
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
  return (
    <div className=" bg-white w-[1100px] rounded-2xl">
      <EmailCount />
      <EmailType />
      {email.filter((data) => props.search == data.search ).map((email) => (
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
  );
};

export default EmailList;
