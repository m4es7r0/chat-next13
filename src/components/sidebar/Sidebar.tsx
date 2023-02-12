import { FC } from "react";

import Chats from "../chats/Chats";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";

const Sidebar: FC = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
