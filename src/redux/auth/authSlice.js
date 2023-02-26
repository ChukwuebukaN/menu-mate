/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceWorkerInitialized: true,
  serviceWorkerUpdated: true,
  serviceWorkerRegistration: null,
  token: undefined,
  isSignedIn: false,
  userEmail: undefined,
  userPw: undefined,
  userTitle: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userNotifications(state, action) {
      const { serviceWorkerInitialized, serviceWorkerUpdated, serviceWorkerRegistration } = action.payload;

      state.serviceWorkerInitialized = serviceWorkerInitialized;
      state.serviceWorkerUpdated = serviceWorkerUpdated;
      state.serviceWorkerRegistration = serviceWorkerRegistration;
    },
    userFirstPageRegistration(state, action) {
      const { userEmail, userPw } = action.payload;

      state.userEmail = userEmail;
      state.userPw = userPw;
    },
    loginUser(state, action) {
      const { token, isSignedIn } = action.payload;

      state.token = token;
      state.isSignedIn = isSignedIn;
    },
    signupUser(state, action) {
      const { token, userTitle } = action.payload;

      state.token = token;
      state.userTitle = userTitle;
    },
  },
});

export const serviceWorkerInitialized = (state) => state.auth.serviceWorkerInitialized;
export const serviceWorkerUpdated = (state) => state.auth.serviceWorkerUpdated;
export const serviceWorkerRegistration = (state) => state.auth.serviceWorkerRegistration;
export const userTitleInitial = (state) => state.auth.userTitle;
export const emailFromFirstPage = (state) => state.auth.userEmail;
export const pwFromFirstPage = (state) => state.auth.userPw;
export const userIsSignedIn = (state) => state.auth.isSignedIn;
export const accessToken = (state) => state.auth.token;
export const { userNotifications, userFirstPageRegistration, loginUser, signupUser } = authSlice.actions;

export default authSlice.reducer;
