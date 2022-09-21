import React from "react";
import "../styles/menuitem.css";

const MenuItem = ({ title }) => {
  return (
    <div className="menuItem">
      <h4>{title}</h4>
    </div>
  );
};

export default MenuItem;
