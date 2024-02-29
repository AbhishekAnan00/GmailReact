import React from "react";
import { MdInbox } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

const EmailType = () => {
  return (
    <>
      <div className="grid grid-cols-3 p-3 gap-4 phone-sm:text-sm width-all:text-lg font-semibold">
        <div className="flex place-items-center h-14 width-all:gap-3 phone-sm:gap-0 border-b-4 border-b-blue-500 hover:bg-gray-100 text-blue-500">
          <MdInbox />
          <p>Primary</p>
        </div>
        <div className="flex width-all:gap-3 phone-sm:gap-0 place-items-center hover:bg-gray-100">
          <BsTag />
          <p>Promotion</p>
        </div>
        <div className="flex width-all:gap-3 phone-sm:gap-0 place-items-center hover:bg-gray-100">
          <FiUsers />
          <p>Social</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default EmailType;
