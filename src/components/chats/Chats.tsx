import Image from "next/image";
import { FC } from "react";

import styles from "./Chats.module.scss";

const Chats: FC = () => {
  return (
    <div className={`${styles.chats}`}>
      <div>
        <Image
          src="https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png"
          width={1270}
          height={1270}
          alt="avatar"
        />
        <div>
          <span>Bill M</span>
          <p>Hello</p>
        </div>
      </div>
      <div>
        <Image
          src="https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png"
          width={1270}
          height={1270}
          alt="avatar"
        />
        <div>
          <span>Bill M</span>
          <p>Hello</p>
        </div>
      </div>
      <div>
        <Image
          src="https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png"
          width={1270}
          height={1270}
          alt="avatar"
        />
        <div>
          <span>Bill M</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
