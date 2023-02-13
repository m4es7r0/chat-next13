import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

interface IAuthState {
  user: {
    displayName: string;
    email: string;
    password: string;
    file?: any;
  };
  logged: boolean;
}

const initialState: IAuthState = {
  user: { displayName: "", email: "", password: "" },
  logged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedStatus: (state, action) => {
      state.logged = action.payload;
    },
    getRegisterData: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Selectors

export const actions = authSlice.actions;
export default authSlice.reducer;
