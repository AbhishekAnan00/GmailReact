import React, { useEffect, useState } from "react";
import EmailCount from "./EmailCount";
import EmailBody from "./EmailBody";
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import { fireDB } from "../firebase";
const SentBox = (props) => {
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
    <>
      <div className=" bg-white w-[1100px] rounded-2xl">
        <EmailCount />
        {email.map((mail) => {
          return (
            <EmailBody
              key={mail.id}
              name={mail.data.fromName}
              email={mail.data.fromEmail}
              subject={mail.data.search}
              message={mail.data.text}
              time={new Date().toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
              })}
            />
          );
        })}
      </div>
    </>
  );
};

export default SentBox;
