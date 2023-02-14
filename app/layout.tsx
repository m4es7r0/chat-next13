"use client";

import { auth } from "@/firebase";
import { Inter } from "@next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("myPage.expectSignIn", "1");
        if (path === "/login" || "/registration") router.replace("/");
      } else {
        localStorage.removeItem("myPage.expectSignIn");
        router.replace(path !== "/registration" ? "login" : "registration");
      }
    });
  }, []);

  return (
    <html lang="en" className={`${inter.className} bg-indigo-300`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex justify-center items-center p-1">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
