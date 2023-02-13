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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(!!currentUser);
  }, [currentUser]);

  return (
    <div className={styles.navbar}>
      <span>MyChat</span>
      <div>
        <div>
          {loading ? (
            <Image
              src={currentUser?.photoURL as string}
              width={1270}
              height={1270}
              alt={currentUser?.displayName as string}
            />
          ) : (
            <Image src="/loader.png" width={1270} height={1270} alt="loader" />
          )}
        </div>
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
