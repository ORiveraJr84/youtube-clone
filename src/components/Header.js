import React from "react";
import "../header.css";
import { Button } from "@material-ui/core/Button";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="Youtube Logo"
          className="header__logo"
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </div>
      <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Header;
