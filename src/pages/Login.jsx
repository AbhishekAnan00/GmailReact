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
            className="h-[200px]"
          />
        </div>
        <div className="mt-4">
          <button
            className="mt-2 p-1 font-semibold bg-blue-600 hover:bg-blue-500 text-white w-[250px] outline-none border-none hover-bg-red-300"
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
