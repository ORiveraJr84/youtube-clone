import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import "../sidebar.css";

const Sidebar = () => {
  return (
    <div className="app__sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
    </div>
  );
};

export default Sidebar;
