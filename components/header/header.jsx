"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../../hoc/wrapper";
import Styles from "./header.module.css";
import { CLOSE_ICON, HAMBURGER_ICON, LOGO_IMG } from "../../lib/config";
import CustomDrawer from "../drawer/customDrawer";
import CustomImage from "../image/image";
import Link from "next/link";
import { fetchCategories } from "@/utils/apiHelper";

const Header = () => {
  const [swipableDrawer, setSwipableDrawer] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null); // State to track the selected link

  const handleSwipableDrawer = () => {
    setSwipableDrawer(!swipableDrawer);
  };

  const handleCloseSwipableDrawer = () => {
    setSwipableDrawer(false);
  };

  // Separate method to fetch categories
  const handlefetchCategoryData = async () => {
    try {
      const data = await fetchCategories();
      if (data) {
        setCategories(data);
        setLoading(false);
      }
    } catch (error) {
      setCategories([]);
      setLoading(false);
      setError("Failed to load categories");
    }
  };

  useEffect(() => {
    handlefetchCategoryData(); // Fetch categories on mount

    // Function to handle window resize
    const handleResize = () => {
      if (window.innerWidth > 767) {
        handleCloseSwipableDrawer(); // Close drawer if width is greater than 767px
      }
    };

    window.addEventListener("resize", handleResize); // Add resize event listener

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run only once on mount

  // Function to handle link click and set the selected link
  const handleLinkClick = (linkId) => {
    setSelectedLink(linkId); // Only manage state in memory, no local storage
  };

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
                  <div className="closeIconClass">
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
            <Link
              href="/"
              className="col-9 pl-0 md:col-12 flex md:justify-center md:mb-3"
              onClick={handleCloseSwipableDrawer}
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
            </Link>
          </div>

          {/* -------------------- Links------------------------- */}
          <div className={Styles?.linkContainer}>
            {loading ? (
              <p>Loading categories...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              categories?.data?.length > 0 &&
              categories?.data?.map((link, index) => (
                <Link
                  href={`/c/${link?.id}`}
                  className={`text-sm md:text-base categoryLink ${selectedLink === link?.id
                      ? "selectedLink"
                      : "hover:underline mb-2"
                    }`} // Add hover only if not selected
                  key={link?.name?.en + index}
                  onClick={() => handleLinkClick(link?.id)} // Set the selected link
                >
                  {link?.name?.en || link?.description}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>

      {swipableDrawer && (
        <div className={Styles?.drawerClass}>
          <CustomDrawer
            isOpen={swipableDrawer}
            onClose={handleCloseSwipableDrawer} // This will close the drawer
            className={Styles?.customContentClass} // Custom class for content
            drawerClassName={Styles?.customDrawerClass} // Custom class for content
          >
            <div className={Styles?.drawerContent}>
              {loading ? (
                <p className="no-categories">Loading categories...</p>
              ) : error ? (
                <p>{error}</p>
              ) : categories?.data?.length > 0 ? (
                categories.data.map((link, index) => (
                  <Link
                    href={`/c/${link?.id}`}
                    className={`${Styles?.linkText} text-sm md:text-base pt-4 mt-1 flex categoryLink hover:underline ${selectedLink === link?.id ? "selectedLink" : ""
                      }`}
                    key={link?.name?.en + index}
                    onClick={() => handleLinkClick(link?.id)} // Set the selected link
                  >
                    {link?.name?.en || link?.description}
                  </Link>
                ))
              ) : (
                <p className="no-categories">No categories available!</p>
              )}
            </div>
          </CustomDrawer>
        </div>
      )}
    </Wrapper>
  );
};

export default Header;
