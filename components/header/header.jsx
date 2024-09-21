"use client"
import React, { Component } from "react";
import Wrapper from "../../hoc/wrapper";
import Styles from "./header.module.css";
import { CLOSE_ICON, HAMBURGER_ICON, LOGO_IMG } from "../../lib/config";
import CustomDrawer from "../drawer/customDrawer";
import CustomImage from "../image/image";
import Link from "next/link";
import { fetchCategories } from "@/utils/apiHelper";


const links = ["Crypto Insights", "Block Chain", "How To", "Opinion", "Reviews","City","World","Business","Entertainment","Web Series"];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swipableDrawer: false,
      categories: [],
      loading: true,
      error: null,
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

  // Separate method to fetch categories
  handlefetchCategoryData = async () => {
    try {
      const data = await fetchCategories();
      if (data) {
        this.setState({ categories: data, loading:false });
      }
    } catch (error) {
      this.setState({ categories: [], loading: false, error: "Failed to load categories" });
    }
  }

  componentDidMount() {
    this.handlefetchCategoryData(); // Call the separate method in componentDidMount
  }



  render() {
    const { categories, loading, error } = this.state;

   

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
              <Link href={'/'} className="col-9 md:col-12 flex md:justify-center md:pl-0 pl-4 md:mb-3" >
                <img src={LOGO_IMG} alt="logo_img" title="logo_img" height={200} width={200} className="logoImg"/>
              </Link>
            </div>

            {/* -------------------- Links------------------------- */}
            <div className={Styles?.linkContainer}>
              {loading ? (
                <p>Loading categories...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                categories?.data?.length > 0 && categories?.data?.map((link, index) => (
                  <p
                    className="text-sm md:text-base hover:underline"
                    key={link?.name?.en + index}
                  >
                    {link?.name?.en || link?.description}
                  </p>
                ))
              )}
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
                {categories?.data?.length > 0 ? (
                  categories.data.map((link, index) => (
                    <p className={`${Styles?.linkText} text-sm md:text-base pt-5`} key={index}>
                      {link?.name?.en || link?.description}
                    </p>
                  ))
                ) : (
                    <p className={`${Styles?.linkText} pt-5`}>No categories available.</p>
                )}
            </div>
            </CustomDrawer>  
            </div>
       
        
        )}
           

         
      </Wrapper>
    );
  }
}

export default Header;
