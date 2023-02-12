import Image from "next/image";
import { FC } from "react";

import styles from "./Chat.module.scss";

const Chat: FC = () => {
  return (
    <div className={`${styles.chat}`}>
      <div>
        <span>Bill M</span>
        <div>
          <Image
            src={"/img/cam.png"}
            alt={"camera call"}
            width={1280}
            height={1280}
          />
          <Image
            src={"/img/add.png"}
            alt={"add smth"}
            width={1280}
            height={1280}
          />
          <Image
            src={"/img/more.png"}
            alt={"more options"}
            width={1280}
            height={1280}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
