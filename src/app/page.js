import React from "react";
import Header from "../../components/header/header";
import HomePageMiddleSection from "../../containers/homePageMiddleSection/homePageMiddleSection";
import Wrapper from "../../hoc/wrapper";

 const HomePage = ()=>  {
  return (
    <Wrapper>
      <div className="h-screen bg-white">
        {/* ------------------- Blog Header -------------------------- */}
        <Header />
        <div className="md:w-full flex">
          {/* ------------------------ Containers For Ad Sense -------------------------------- */}
          <div className="commonwrapper" />

          {/* ------------------------- Home Page Middle Section ------------------------------- */}
          <div className=" middleWrapper">
            <HomePageMiddleSection/>
          </div>

          {/* ------------------------ Containers For Ad Sense -------------------------------- */}
          <div className="commonwrapper" />
    
        </div>

        <style>
          {
            `
            .commonwrapper {
              min-width:20% !important;
            
            }
            .middleWrapper {
             min-width:60% !important;
            }

            @media only screen and (max-width:767.95px) {

            .commonwrapper {
               display:none !important;
            }
                 .middleWrapper {
                  width:100vw !important;
                  min-width:unset !important;
                }
            
            }
            
            
            
            
            
            `
          }
        </style>



      </div>
    </Wrapper>
   
  );
}

export default HomePage;
