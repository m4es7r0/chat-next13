import { FC } from "react";
import Message from "../message/Message";

import styles from "./Messages.module.scss";

const Messages: FC = () => {
  return (
    <div className={`${styles.messages}`}>
      {[...Array(5)].map((el, i) => (
        <Message key={i} />
      ))}
    </div>
  );
};

export default Messages;
