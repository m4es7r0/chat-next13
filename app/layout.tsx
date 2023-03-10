import { Inter } from "@next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} bg-indigo-300`}>
      <head />
      <body className="flex justify-center items-center p-1">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
