import React, { useState } from "react";
import { HiPencil } from "react-icons/hi2";
import SidebarOption from "./SidebarOption";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { BiSend } from "react-icons/bi";
import { LuFile } from "react-icons/lu";
import { LuMails } from "react-icons/lu";
import { BsChatSquareText } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiSpamLine } from "react-icons/ri";
import { BiCaretRight } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";
import { MdLabelImportantOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { openSendMessage } from "../redux/EmailSlice";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../redux/UserSlice";
import { IoMenu } from "react-icons/io5";
import { MdExpandLess } from "react-icons/md";
const Sidebar = (props) => {
  const [show, setShow] = useState(true);
  const [more, setMore] = useState(false);
  const [disableMore, setDisableMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inboxOnClick = () => {
    navigate("/");
  };
  const sendOnClick = () => {
    navigate("/sent");
  };
  const toggle = () => {
    setShow(!show);
  };
  const toggleMore = () => {
    setMore(!more);
    setDisableMore(true);
    setShowLess(true);
  };
  const toggleLess = () => {
    setMore(false);
    setDisableMore(false);
    setShowLess(false);
  };
  return (
    <div className="w-[250px] width-all:absolute width-all:top-1">
      <div className="width-all:w-[250px] text-center flex justify-left gap-5 p-4 phone-sm:absolute phone-sm:top-[5px] phone-sm:left-[10px] phone-lg:left-[20px] phone-xl:left-[25px] width-all:static">
        <IoMenu
          onClick={toggle}
          className="width-all:h-[40px] phone-sm:h-[30px] phone-sm:text-[20px] width-all:text-3xl width-all:flex width-all:justify-center width-all:items-center text-stone-600 cursor-pointer"
        />
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="Gmail"
          className="h-[40px] w-[110px] width-all:block phone-sm:hidden"
        />
      </div>
      {show && (
        <>
          <div className="phone-sm:relative  phone-sm:z-10 bg-primary rounded-2xl">
            <div
              className="phone-sm:hidden width-all:flex ml-2 h-[40px] w-[160px] flex justify-center text-xl place-items-center bg-secondary rounded-2xl pt-8 pb-8 gap-2 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => dispatch(openSendMessage())}
            >
              <HiPencil />
              <p>compose</p>
            </div>
            <div className="width-all:hidden phone-sm:block ml-2 mt-2 text-orange-500 font-semibold">
              <p>Gmail</p>
            </div>
            <div className="mt-2 max-w-[250px]">
              <SidebarOption
                icon={<MdOutlineGifBox onClick={inboxOnClick} />}
                title={"Inbox"}
                showCount={true}
              />
              <SidebarOption
                icon={<MdOutlineStarBorderPurple500 />}
                title={"Starred"}
              />
              <SidebarOption icon={<GoClock />} title={"Clock"} />
              <SidebarOption
                icon={<BiSend onClick={sendOnClick} />}
                title={"Sent"}
                showCount={true}
              />
              <SidebarOption icon={<BsChatSquareText />} title={"Chats"} />
              <SidebarOption icon={<LuFile />} title={"Draft"} />
              <SidebarOption
                icon={<MdExpandMore onClick={toggleMore} />}
                title={"More"}
                disabled={disableMore}
              />
              {showLess && (
                <SidebarOption
                  icon={<MdExpandLess onClick={toggleLess} />}
                  title={"Less"}
                />
              )}
              {more && (
                <>
                  <SidebarOption
                    icon={<MdLabelImportantOutline />}
                    title={"Important"}
                  />
                  <SidebarOption icon={<LuMails />} title={"All Mail"} />
                  <SidebarOption icon={<RiSpamLine />} title={"Spam"} />
                  <SidebarOption icon={<RiDeleteBin6Line />} title={"Bin"} />
                  <div className="flex font-semibold text-lg ml-3 mt-2">
                    <p>
                      <BiCaretRight />
                    </p>
                    <span>Categories</span>
                  </div>
                  <SidebarOption
                    icon={<IoSettingsOutline />}
                    title={"Manage labels"}
                  />
                  <SidebarOption icon={<FaPlus />} title={"Create new label"} />
                </>
              )}
            </div>
            <div className="flex justify-between w-[230px] text-xl ml-2 font-semibold mt-5 opacity-[0.8]">
              <p>Labels</p>
              <p>
                <FaPlus />
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
