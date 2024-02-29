import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Compose from "./pages/Compose";
import EmailList from "./pages/EmailList";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
import { selectUser, signIn, signOut } from "./redux/UserSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailDetail from "./pages/EmailDetail";
import Login from "./pages/Login";
import { sendingMessage } from "./redux/EmailSlice";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import SentBox from "./pages/SentBox";
function App() {
  // console.log(import.meta.env.VITE_API_KEY)
  const [search, setSearch] = useState("");
  const sendMessage = useSelector(sendingMessage);
  const user = useSelector(selectUser);
  // console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          signIn({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(signOut);
      }
    });
  }, []);
  return (
    <>
      {user ? (
        <Router>
          <div>
            <Header search={search} setSearch={setSearch} />
            <div className="flex">
              <Sidebar search={search} />
              <Routes>
                <Route path="/email" element={<EmailDetail />} />
                <Route path="/" element={<EmailList search={search} />} />
                <Route path="/sent" element={<SentBox search={search} />} />
              </Routes>
            </div>
            <div>{sendMessage && <Compose />}</div>
          </div>
        </Router>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
