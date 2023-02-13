"use client";

import { AuthContext } from "@/src/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, PropsWithChildren, useContext, useEffect } from "react";

const layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) router.replace("/");
  }, [currentUser]);

  return (
    <>
      {!currentUser ? (
        <div className="flex justify-center items-center">
          <Image
            className="w-24 h-24"
            src={"/loader.png"}
            width={64}
            height={64}
            alt="loader"
          />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default layout;
