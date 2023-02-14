"use client";

import Chat from "@/src/components/chat/Chat";
import Sidebar from "@/src/components/sidebar/Sidebar";

import { Inter } from "@next/font/google";
import Image from "next/image";

import styles from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} ${styles.main}`}>
      <div>
        {localStorage.getItem("myPage.expectSignIn") ? (
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
