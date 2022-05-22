import "./navigation.css";
import React from "react";
import NavButton from "../Buttons/navButton";

function Navigation({ menuItems }) {
  return (
    <div className="nav">
      {menuItems.map((item) => {
        return (
          <NavButton
            buttonText={item.name}
            link={item.link}
            variant="contained"
          />
        );
      })}
    </div>
  );
}

export default Navigation;
