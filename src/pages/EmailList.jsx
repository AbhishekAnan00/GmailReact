import React, { useEffect, useState } from "react";
import EmailCount from "./EmailCount";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";
import { fireDB } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import{ selectUser } from "../redux/UserSlice";

const EmailList = (props) => {
  const user = useSelector(selectUser)
  const [email, setEmail] = useState([]);
  useEffect(() => {
    const userDoc = doc(fireDB, "users", user.email);
    const messageDoc = collection(userDoc, "inbox");

    // Set up a real-time snapshot listener
    const unsubscribe = onSnapshot(
      messageDoc,
      (querySnapshot) => {
        const updatedData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setEmail(updatedData);
      },
      (error) => {
        console.error("Error getting inbox documents: ", error);
      }
    );

    // Clean up the snapshot listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [user.email]);

  return (
    <div className=" bg-white w-[1100px] rounded-2xl">
      <EmailCount />
      <EmailType />
      {email
        .filter((obj) => obj.data.search.toLowerCase().includes(props.search))
        .map((data) => {
          return (
            <EmailBody
              key={id}
              name={data.fromName}
              email={data.fromEmail}
              subject={data.search}
              message={data.text}
              time={new Date().toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
              })}
               />
          );
        })}
    </div>
  );
};

export default EmailList;
