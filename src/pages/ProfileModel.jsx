import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, signOut } from '../redux/UserSlice';
import { PiSignOutBold } from "react-icons/pi";

const style = {
  position: 'absolute',
  top: '34%',
  left: '70%',
  transform: 'translate(-50%, -50%)',
  width: "30vw",
  height : "20vw",
  bgcolor: '#D8E4F0',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: "4vw",
  p: 4,
  padding :"2vw"
};

export default function ProfileModel() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const handleOnLogout = () => {
    dispatch(signOut())
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Avatar  onClick={handleOpen} src={user.photoURL} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="outline-none">
          <Typography style={{textAlign:"center", fontSize:"1.2vw"}}>
            {user.email}
          </Typography>
          <Avatar src={user.photoURL} style={{marginLeft:"11.6vw",width:"6vw",height:"6vw"}}/>
          <Typography style={{textAlign:"center", fontSize:"1.7vw"}} sx={{ mt: 2 }}>
            {user.displayName}
          </Typography>
          <button className='bg-white items-center flex gap-0 justify-center text-1xl hover:bg-slate-100 outline-none'  style={{width:"14vw",borderRadius:"1vw",marginTop:"2vw",height:"3vw",marginLeft:"7.5vw"}} onClick={handleOnLogout}><PiSignOutBold />Signout</button>
        </Box>
      </Modal>
    </div>
  );
}
