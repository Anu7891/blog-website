import React from "react";
import Wrapper from "../../hoc/wrapper";
import Styles from "./header.module.css";


const links = ["Crypto Insights", "Block Chain", "How To", "Opinion", "Reviews"];

const Header = () => {


    return(
    <Wrapper>
        <div className={Styles?.headerWrapper}>
            {/* ------------------- Header-Conatiner--------------------- */}
            <div className={`${Styles?.containerWrapper} container mx-auto`}>
             <div className="w-1/4">
                <span className={Styles?.headerText} >
                    Crypto
                </span>
                <span className={Styles?.blogText}>Blogs</span>
             </div>

             {/* -------------------- Links------------------------- */}
              <div className={Styles?.linkContainer}>
              {links.map((link, index) => (
                <p className="text-sm md:text-base" key={index}>{link}</p>
             ))}
              </div>
            </div>
        </div>

    </Wrapper>

    )

}


export default Header;