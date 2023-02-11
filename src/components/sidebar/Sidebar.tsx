import { FC } from "react";

import Navbar from "../navbar/Navbar";
import Search from "../search/Search";

const Sidebar: FC = () => {
  return (
    <div>
      <Navbar />
      <Search />
    </div>
  );
};

export default Sidebar;
