import Image from "next/image";
import { FC } from "react";

import styles from "./Search.module.scss";

const Search: FC = () => {
  return (
    <div className={styles.search}>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="find a user"
        />
      </div>
      <div>
        <Image
          src="https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png"
          width={1270}
          height={1270}
          alt="avatar"
        />
        <span>Bill M</span>
      </div>
    </div>
  );
};

export default Search;
