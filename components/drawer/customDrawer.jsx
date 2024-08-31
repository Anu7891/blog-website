import React, { Component } from "react";
import Drawer from "@mui/material/Drawer";

class CustomDrawer extends Component {
  render() {
    const { children, isOpen, anchor = "left", onClose, className, drawerClassName } = this.props;

    return (
      <Drawer
        anchor={anchor}
        open={isOpen}
        onClose={onClose} // This correctly closes the drawer on clicking outside
        classes={{ paper: drawerClassName }} // Custom class for Drawer paper
      >
        <div
          className={className} // Apply custom className to the content div
          tabIndex={0}
          role="button"
          onClick={onClose} // This will close the drawer when clicking on a child element
          onKeyDown={onClose} // This will close the drawer when pressing the escape key
        >
          {children}
        </div>
      </Drawer>
    );
  }
}

export default CustomDrawer;
