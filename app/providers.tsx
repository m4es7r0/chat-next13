"use client";

import { AuthContextProvider } from "@/src/context/AuthContext";
import store from "@/src/store/store";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    <AuthContextProvider>{children}</AuthContextProvider>
  </Provider>
);
