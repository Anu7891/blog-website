import React from "react";
import Wrapper from "../../hoc/wrapper";
import HomePageMiddleSection from "./components/homePageMiddleSection/homePageMiddleSection";
import Header from "../../components/header/header";
import CommonWrapper from "../../hoc/commonWrapper";
import MiddleWrapper from "../../hoc/middleWrapper";
import Footer from "../../components/footer/Footer";
import SEOHead from "../../html/SEOHead";

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

      <div className="h-screen bg-white">
        {/* ------------------- Blog Header -------------------------- */}
          <Header />
          
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

        {/* ------------------------------------- Footer------------------------------------------------ */}
        <Footer />

      </div>
    </Wrapper>
   
  );
}

export default HomePage;
