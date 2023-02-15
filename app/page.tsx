"use client";

import Chat from "@/src/components/chat/Chat";
import Sidebar from "@/src/components/sidebar/Sidebar";

import { Inter } from "@next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(
      localStorage.getItem("myPage.expectSignIn") as unknown as boolean
    );
  }, []);

  return (
    <main className={`${inter.className} ${styles.main}`}>
      <div>
        {logged ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : (
          <div className="flex justify-center items-center">
            <Image
              className="w-24 h-24"
              src={"/loader.png"}
              width={64}
              height={64}
              alt="loader"
            />
          </div>
        )}
      </div>
    </main>
  );
}
