import React from "react";
import "../sidebarRow.css";

const SidebarRow = ({ selected, Icon, title }) => {
  return (
    <div className={`sidebar__sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebar__icon" />
      <h3>{title}</h3>
    </div>
  );
};

export default SidebarRow;
