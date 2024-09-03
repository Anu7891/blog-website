"use client"
import React, { Component } from "react";
import Wrapper from "../../hoc/wrapper";
import Styles from "./header.module.css";
import { CLOSE_ICON, HAMBURGER_ICON } from "../../lib/config";
import CustomDrawer from "../drawer/customDrawer";
import CustomImage from "../image/image";
import Link from "next/link";


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
                <CustomImage src={HAMBURGER_ICON} alt="menu" title="menu" height={28} width={28} onClick={this.handleSwipableDrawer} />

                ) : (
                <CustomImage src={CLOSE_ICON} alt="close-icon" title="close-icon" height={20} width={20} onClick={this.handleCloseSwipableDrawer} />
                )}
              </div>
              <Link href={'/'} className="col-9 md:col-12 flex md:justify-center md:pl-0 pl-4" >
                <span className={Styles?.headerText}>Crypto</span>
                <span className={Styles?.blogText}>Blogs</span>
              </Link>
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
