"use client"
import React, { Component } from "react";
import Wrapper from "../../hoc/wrapper";
import Styles from "./header.module.css";
import { CLOSE_ICON, HAMBURGER_ICON } from "../../lib/config";
import CustomDrawer from "../drawer/customDrawer";


const links = ["Crypto Insights", "Block Chain", "How To", "Opinion", "Reviews","City","World","Business","Entertainment","Web Series"];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swipableDrawer: false,
    };
  }

  handleSwipableDrawer = () => {
    this.setState((prevState) => ({
      swipableDrawer: !prevState.swipableDrawer,
    }));
  };

 handleCloseSwipableDrawer = () => {
  this.setState({ swipableDrawer: false });
};


  render() {
    return (
      <Wrapper>
        <div className={Styles?.headerWrapper}>
          {/* ------------------- Header-Container--------------------- */}
          <div className={`${Styles?.containerWrapper} container`}>
            <div className="w-full flex justify-center col-12 px-0  items-center">
              <div className={`${Styles?.menu} col-3 md:hidden`} >
                {!this.state.swipableDrawer ? (
                <img src={HAMBURGER_ICON} alt="menu" title="menu" height={"28px"} width={"28px"} onClick={this.handleSwipableDrawer} />

                ) : (
                <img src={CLOSE_ICON} alt="close-icon" title="close-icon" height={"20px"} width={"20px"} onClick={this.handleCloseSwipableDrawer} />
                )}
              </div>
              <div className="col-9 md:col-12 flex md:justify-center">
                <span className={Styles?.headerText}>Crypto</span>
                <span className={Styles?.blogText}>Blogs</span>
              </div>
            </div>

            {/* -------------------- Links------------------------- */}
            <div className={Styles?.linkContainer}>
              {links.map((link, index) => (
                <p className="text-sm md:text-base" key={index}>
                  {link}
                </p>
              ))}
            </div>
          </div>
        </div>

      
        {this.state.swipableDrawer && (
            <div className={Styles?.drawerClass}>
            <CustomDrawer
          
            isOpen={this.state.swipableDrawer}
            onClose={this.handleCloseSwipableDrawer} // This will close the drawer
            className={Styles?.customContentClass} // Custom class for content
            drawerClassName={Styles?.customDrawerClass}  //Custom class for content
            >
            <div className={Styles?.drawerContent}>
                {links.map((link, index) => (
                <p className={`${Styles?.linkText} text-sm md:text-base`} key={index}>
                    {link}
                </p>
                ))}
            </div>
            </CustomDrawer>  
            </div>
       
        
        )}
           

         
      </Wrapper>
    );
  }
}

export default Header;
