import React from "react";
import Wrapper from "../../hoc/wrapper";
import HomePageMiddleSection from "./components/homePageMiddleSection/homePageMiddleSection";
import Header from "../../components/header/header";

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
           
            
            
            
            
            
            `
          }
        </style>



      </div>
    </Wrapper>
   
  );
}

export default HomePage;
