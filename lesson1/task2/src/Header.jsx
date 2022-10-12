import React, { Component } from "react";
import UserMenu from "./UserMenu.jsx";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <UserMenu />
      </div>
    );
  }
}

export default Header;
