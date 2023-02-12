"use client";

import Image from "next/image";
import { FC } from "react";

import styles from "./Message.module.scss";

const Message: FC = () => {
  return (
    <div className={styles.message}>
      <div>
        <Image
          src="https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png"
          alt="avatar"
          width={1280}
          height={1280}
        />
        <div>
          <time dateTime={`${new Date().toISOString()}`}>
            {new Date().toDateString().slice(0, -5)}
          </time>
          <span>{new Date().toLocaleTimeString().slice(0, -3)}</span>
        </div>
      </div>

      <div>
        <p>hello</p>
        <Image
          src="https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png"
          alt="payload image"
          width={1280}
          height={1280}
        />
      </div>
    </div>
  );
};

export default Message;
