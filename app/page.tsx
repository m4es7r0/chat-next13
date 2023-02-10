import Chat from "@/src/components/chat/Chat";
import Sidebar from "@/src/components/sidebar/Sidebar";
import { Inter } from "@next/font/google";
import Image from "next/image";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} ${styles.main}`}>
      <div>
        <Sidebar />
        <Chat />
      </div>
    </main>
  );
}
