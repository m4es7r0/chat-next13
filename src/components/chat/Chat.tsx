"use client";

import { FC } from "react";

import Input from "./input/Input";
import Messages from "./messages/Messages";
import ChatNavbar from "./navbar/ChatNavbar";

import styles from "./Chat.module.scss";

const Chat: FC = () => {
  return (
    <div className={`${styles.chat}`}>
      <ChatNavbar />
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
