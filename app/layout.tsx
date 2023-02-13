"use client";

import { AuthContext } from "@/src/context/AuthContext";
import { Inter } from "@next/font/google";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) router.replace("/login");
  }, [currentUser]);

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
