import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div className="col CheckBox">
      <input
        type="checkbox"
        name={props.class}
        defaultChecked={props.checked}
        onChange={props.changeCheckBox}
      />
      <span className="class">{props.class}</span>
    </div>
  );
};

export default NavBar;
