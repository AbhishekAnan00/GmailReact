import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signOut } from "../redux/UserSlice";
import { PiSignOutBold } from "react-icons/pi";

const style = {
  // position: 'absolute',
  // top: '24%', //top:"34"
  // left: '50%', //70%
  // width: "70vw", //30vw
  // height : "50vw", //20vw
  transform: "translate(-50%, -50%)",
  bgcolor: "#D8E4F0",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "4vw",
  p: 4,
  padding: "2vw",
};

export default function ProfileModel() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleOnLogout = () => {
    dispatch(signOut());
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Avatar
        onClick={handleOpen}
        src={user.photoURL}
        className="cursor-pointer"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="outline-none flex flex-col items-center gap-2 width-all:absolute width-all:right-[10%] width-all:top-[20%] width-all:left-[70%] width-all:w-[300px] phone-sm:absolute phone-sm:top-[20%] phone-sm:right-[0%] phone-sm:left-[50%] phone-sm:w-[250px] border-none cursor-pointer"
        >
          <Typography>{user.email}</Typography>
          <Avatar src={user.photoURL} />
          <Typography>{user.displayName}</Typography>
          <button
            className="bg-white items-center flex gap-0 justify-center text-1xl hover:bg-slate-100 outline-none cursor-pointer text-sm p-1 w-[100px]"
            onClick={handleOnLogout}
          >
            <PiSignOutBold />
            Signout
          </button>
        </Box>
      </Modal>
    </div>
  );
}
