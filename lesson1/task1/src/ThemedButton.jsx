import React from "react";
import { ThemesContext } from "./themes-context.js";

class ThemedButton extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
        className="btn"
      />
    );
  }
}

ThemedButton.contextType = ThemesContext;

export default ThemedButton;
