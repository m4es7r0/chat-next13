import Image from "next/image";
import { FC } from "react";

import styles from "./ChatNavbar.module.scss";

const ChatNavbar: FC = () => {
  return (
    <div className={styles.navbar}>
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
  );
};

export default ChatNavbar;
