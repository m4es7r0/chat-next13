"use client";

import Image from "next/image";
import { FC } from "react";

import styles from "./Message.module.scss";

interface IMassage {
  timestamp: Date;
}

const Message: FC<IMassage> = ({ timestamp }) => {
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
          <time>{timestamp?.toLocaleDateString("en-gb")}</time>
          <span>
            {timestamp?.toLocaleTimeString("en-us", {
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
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
