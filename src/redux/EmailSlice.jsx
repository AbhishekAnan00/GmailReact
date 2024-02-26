import { createSlice } from "@reduxjs/toolkit";

export const EmailSlice = createSlice({
  name: "mail",
  initialState: {
    SendMessage: false,
    checkEmail: null,
    sendBox: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.SendMessage = true;
    },
    closeSendMessage: (state) => {
      state.SendMessage = false;
    },
    openEmail: (state, action) => {
      state.checkEmail = action.payload;
    },
    sendEmail: (state) => {
      state.sendBox = true;
    },
  },
});

export const { openSendMessage, closeSendMessage, openEmail } =
  EmailSlice.actions;

export const sendingMessage = (state) => state.mail.SendMessage;
export const selectedEmail = (state) => state.mail.checkEmail;
export const selectdSentBox = (state) => state.mail.sendBox;

export default EmailSlice.reducer;
