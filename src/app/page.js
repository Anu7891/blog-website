import React from "react";
import CommonWrapper from "../../hoc/commonWrapper";
import MiddleWrapper from "../../hoc/middleWrapper";
import Wrapper from "../../hoc/wrapper";
import SEOHead from "../../html/SEOHead";
import HomePageMiddleSection from "./components/homePageMiddleSection/homePageMiddleSection";

 export const metadata = {
  title: 'Crypto3Blog',
  description: 'Stay updated with the latest crypto news, trends, and insights on Crypto3Blog.',
};

 const HomePage = ()=>  {
  return (
    <Wrapper>
      {/* ----------------------- SEO Head Description -------------------------------------- */}
      <SEOHead
        title={metadata?.title}
        description={metadata?.description}
      />

      <div className=" bg-white">    
        <div className="md:w-full flex">
          {/* ------------------------ Containers For Ad Sense -------------------------------- */}
            <CommonWrapper/>

          {/* ------------------------- Home Page Middle Section ------------------------------- */}
            <MiddleWrapper>
             <HomePageMiddleSection/>
            </MiddleWrapper>

          {/* ------------------------ Containers For Ad Sense -------------------------------- */}
          <CommonWrapper />
        </div>

      </div>

     
    </Wrapper>
   
  );
}

export default HomePage;
