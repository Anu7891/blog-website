// components/header/header.js
"use client"
import React from "react";
import Wrapper from "../../hoc/wrapper";
import Styles from "./header.module.css";
import { CLOSE_ICON, HAMBURGER_ICON, LOGO_IMG } from "../../lib/config";
import CustomDrawer from "../drawer/customDrawer";
import CustomImage from "../image/image";
import Link from "next/link";
import CustomLink from "../customLink/customLink";
import SearchComponent from "@/app/components/searchComponent/searchComponent";

const Header = ({ categories, loading, error }) => {
  const [swipableDrawer, setSwipableDrawer] = React.useState(false);
  const [selectedLink, setSelectedLink] = React.useState(null); // State to track the selected link

  const handleSwipableDrawer = () => {
    setSwipableDrawer(!swipableDrawer);
  };

  const handleCloseSwipableDrawer = () => {
    setSwipableDrawer(false);
  };

  // Function to handle link click and set the selected link
  const handleLinkClick = (linkId) => {
    setSelectedLink(linkId);
  };

  const handleHomePageRouting  =() => {
    if(typeof window !== "udefined" && window.innerWidth < 767) {
      handleCloseSwipableDrawer()
    } else {
      setSelectedLink(""); // Only manage state in memory, no local storage
    }
  }

  return (
    <Wrapper>
      <div className={Styles?.headerWrapper}>
        {/* ------------------- Header-Container--------------------- */}
        <div className={`${Styles?.containerWrapper} container`}>
          <div className="w-full flex justify-center col-12 px-0 items-center">
            <div className={`${Styles?.menu} col-3 md:hidden`}>
              {!swipableDrawer ? (
                <CustomImage
                  src={HAMBURGER_ICON}
                  alt="menu"
                  title="menu"
                  height={24}
                  width={24}
                  onClick={handleSwipableDrawer}
                />
              ) : (
                <div className="close-icon">
                <CustomImage
                  src={CLOSE_ICON}
                  alt="close-icon"
                  title="close-icon"
                  height={36}
                  width={36}
                  onClick={handleCloseSwipableDrawer}
                />
                </div>
              )}
            </div>
            <CustomLink
              href="/"
              className="col-9 pl-0 md:col-12 flex md:justify-center md:mb-3"
              handleClick={handleHomePageRouting}
            >
              <p className="logoImgClass">
                <CustomImage
                  src={LOGO_IMG}
                  alt="logo_img"
                  title="logo_img"
                  height={80}
                  width={250}
                  className="logoImg"
                />
              </p>
            </CustomLink>
          </div>

          {/* -------------------- Links------------------------- */}
          <div className={Styles?.linkContainer}>
            {loading ? (
              <p>Loading categories...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div className="flex items-center justify-center gap-8">
                {categories?.data?.length > 0 &&
                categories?.data?.map((link, index) => (
                  <CustomLink
                    key={link?.name?.en + index}
                    href={`/c/${link?.id}`}
                    className={`text-sm md:text-base categoryLink ${selectedLink === link?.id
                      ? "selectedLink"
                      : "hover:underline mb-2"
                      }`} // Add hover only if not selected
                    handleClick={() => handleLinkClick(link?.id)} // Set the selected link
                  >
                    {link?.name?.en || link?.description}
                  </CustomLink>
                ))}
                {/* <SearchComponent/> */}
              </div>
            )}
          </div>
        </div>
      </div>

      {swipableDrawer && (
        <CustomDrawer
          isOpen={swipableDrawer}
          onClose={handleCloseSwipableDrawer}
          className={Styles?.customContentClass}
          drawerClassName={Styles?.customDrawerClass}
        >
          <div className={Styles?.drawerContent}>
            {loading ? (
              <p className="no-categories">Loading categories...</p>
            ) : error ? (
              <p>{error}</p>
            ) : categories?.data?.length > 0 ? (
              categories.data.map((link, index) => (
                <Link
                  key={link?.name?.en + index}
                  href={`/c/${link?.id}`}
                  className={`${Styles?.linkText} text-sm md:text-base pt-4 mt-1 flex categoryLink hover:underline`}
                >
                  {link?.name?.en || link?.description}
                </Link>
              ))
            ) : (
              <p className="no-categories">No categories available!</p>
            )}
          </div>
        </CustomDrawer>
      )}
    </Wrapper>
  );
};

export default Header;
