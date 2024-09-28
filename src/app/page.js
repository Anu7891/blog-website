import React from "react";
import Wrapper from "../../hoc/wrapper";
import HomePageMiddleSection from "./components/homePageMiddleSection/homePageMiddleSection";
import Header from "../../components/header/header";
import CommonWrapper from "../../hoc/commonWrapper";
import MiddleWrapper from "../../hoc/middleWrapper";
import Footer from "../../components/footer/footer";


 const HomePage = ()=>  {
  return (
    <Wrapper>
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
