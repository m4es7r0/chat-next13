"use client";

import store from "@/src/store/store";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
