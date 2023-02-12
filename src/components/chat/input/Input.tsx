import Image from "next/image";
import { FC } from "react";

import styles from "./Input.module.scss";

const Input: FC = () => {
  return (
    <div id="input" className={`${styles.input}`}>
      <textarea
        onChange={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        required
        rows={1}
        name="main-input"
        id="main-input"
        placeholder="Type something..."
      />
      <div>
        <Image src={"/img/attach.png"} alt="add" width={1280} height={1280} />
        <input type="file" name="add-file" id="add-file" className="hidden" />
        <label htmlFor="add-file">
          <Image src={"/img/img.png"} alt="add" width={1280} height={1280} />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
