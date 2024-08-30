 import React from "react";
import Header from "../../components/header/header";
import BlogWrapper from "../../containers/blogWrapper/blogWrapper";
import { MostRead } from "../../containers/mostRead/MostRead";

 const HomePage = ()=>  {
  return (
    <div className="h-screen bg-white">
      {/* ------------------- Blog Header -------------------------- */}
      <Header/>
      <div className="container mx-auto">
       <div className="w-full">
         <BlogWrapper/>
         <MostRead/> 
        </div>
      </div>
    </div>
  );
}

export default HomePage;
