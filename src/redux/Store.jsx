import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./EmailSlice";
import userReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
