import React from "react";
import gmail_logo from "../assets/cartoon.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/UserSlice";
const Login = () => {
  const dispatch = useDispatch(signIn);
  const clickOnLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleAuthProvider);
      const user = userCredential.user;
      // console.log("user:", user);
      dispatch(
        signIn({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      );
    } catch (err) {
      alert("google sign-in failed");
    }
  };
  return (
    <>
      <div className="w-full mt-40 flex flex-col place-items-center cursor-pointer">
        <div>
          <img
            src={gmail_logo}
            alt="Gmail logo"
            className="h-[200px] w-[200]"
          />
        </div>
        <div className="mt-4">
          <button
            className="font-semibold bg-red-500 hover:bg-red-400 text-white w-40 rounded-full p-2 hover-bg-red-300"
            onClick={clickOnLogin}
          >
            tap to login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
