 import React from "react";
import Header from "../../components/header/header";
import BlogWrapper from "../../containers/blogWrapper/blogWrapper";
import { MostReadSection } from "../../containers/mostRead/MostRead";
import Wrapper from "../../hoc/wrapper";
import BlogThirdSection from "../../containers/blogThirdSection/blogThirdSection";

 const HomePage = ()=>  {
  return (
    <Wrapper>
      <div className="h-screen bg-white">
        {/* ------------------- Blog Header -------------------------- */}
        <Header />
        <div className="md:w-full flex">
          <div className="commonwrapper" />

          <div className=" middleWrapper">
            {/* ------------------------ First Blof Section ---------------------- */}
            <BlogWrapper />
            {/* ------------------------- Second Blog Section --------------------- */}
            <MostReadSection />

            {/*------------------------------ Third Blog Section ------------------ */}
            <BlogThirdSection/>
          </div>
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
