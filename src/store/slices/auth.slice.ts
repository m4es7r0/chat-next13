import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

interface IAuthState {
  user: {
    name: string;
    email: string;
    password: string;
  };
}

const initialState: IAuthState = {
  user: { name: "", email: "", password: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getRegisterData: (
      state,
      { payload }: PayloadAction<IAuthState["user"]>
    ) => {
      state.user = payload;
    },
  },
});

// Selectors

export const actions = authSlice.actions;
export default authSlice.reducer;
