 import React from "react";
import Header from "../../components/header/header";
import MainBannerSection from "../../containers/mainBannerSection/mainBannerSection";

 const HomePage = ()=>  {
  return (
    <div className="h-screen bg-white">
      {/* ------------------- Blog Header -------------------------- */}
      <Header/>
      <div className="container mx-auto">
      <MainBannerSection/>
      </div>
    </div>
  );
}

export default HomePage;
