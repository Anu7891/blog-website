 import React from "react";
import Header from "../../components/header/header";
import BlogWrapper from "../../containers/blogWrapper/blogWrapper";
import { MostReadSection } from "../../containers/mostRead/MostRead";
import Wrapper from "../../hoc/wrapper";

 const HomePage = ()=>  {
  return (
    <Wrapper>
      <div className="h-screen bg-white">
        {/* ------------------- Blog Header -------------------------- */}
        <Header />
        <div className="w-full flex">
          <div className="commonwrapper" />

          <div className=" middleWrapper">
            {/* ------------------------ First Blof Section ---------------------- */}
            <BlogWrapper />
            {/* ------------------------- Second Blog Section --------------------- */}
            <MostReadSection />
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
            
            
            
            
            
            `
          }
        </style>



      </div>
    </Wrapper>
   
  );
}

export default HomePage;
