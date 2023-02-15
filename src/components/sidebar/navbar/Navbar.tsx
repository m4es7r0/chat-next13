"use client";

import { auth } from "@/firebase";
import { AuthContext } from "@/src/context/AuthContext";
import { signOut } from "firebase/auth";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useContext, useEffect, useState } from "react";

import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={styles.navbar}>
      <span>MyChat</span>
      <div>
        <>
          {currentUser ? (
            <img
              src={currentUser?.photoURL as string}
              alt={currentUser?.displayName as string}
              onError={(e) => {
                e.currentTarget.src = "/img/user.svg";
              }}
            />
          ) : (
            <Image src="/loader.png" width={1920} height={1920} alt="loader" />
          )}
        </>
        <span>{currentUser?.displayName}</span>
        <button
          onClick={() => {
            signOut(auth);
            router.replace("/login");
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
