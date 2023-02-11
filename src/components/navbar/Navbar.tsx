import Image from "next/image";
import { FC } from "react";

import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <span>MyChat</span>
      <div>
        <div>
          <Image
            src="https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png"
            width={1270}
            height={1270}
            alt="avatar"
          />
        </div>
        <span>John Snow</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
