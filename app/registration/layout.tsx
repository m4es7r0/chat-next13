"use client";

import { AuthContext } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { FC, PropsWithChildren, useContext, useEffect } from "react";

const layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) router.replace("/");
  }, [currentUser]);

  return <>{children}</>;
};

export default layout;
