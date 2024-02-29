import React from "react";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { TbCaretDownFilled } from "react-icons/tb";
import { IoReloadSharp } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";

const EmailCount = ({ count }) => {
  return (
    <div className="flex justify-between width-all:mt-3 phone-sm:mt-1 p-3">
      <div className="flex gap-8 width-all:text-xl phone-sm:text-sm text-stone-700">
        <RiCheckboxBlankLine />
        <TbCaretDownFilled />
        <IoReloadSharp />
        <SlOptionsVertical />
      </div>
      <div className="flex  items-center place-items-center width-all:gap-8 phone-sm:gap-0">
        <div className="text-stone-900 phone-sm:text-sm width-all:text-lg">
          <p>
            {" "}
            0 - {count} of {count}
          </p>
        </div>
        <div className="width-all:flex width-all:text-2xl phone-sm:flex  phone-sm:text-sm gap-5 text-stone-500">
          <RxCaretLeft />
          <RxCaretRight />
        </div>
      </div>
    </div>
  );
};

export default EmailCount;
