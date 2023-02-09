import { Inter } from "@next/font/google";
import Image from "next/image";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className={`${inter.className}`}>Hello, Next.js!</main>;
}
