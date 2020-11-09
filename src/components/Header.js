import React from "react";
import "../header.css";
import { Button } from "@material-ui/core/Button";
import {
  MenuIcon,
  SearchIcon,
  VideoCallIcon,
  AppsIcon,
  NotificationsIcon,
  Avatar,
} from "@material-ui/icons";

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
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
