import React from 'react'
import Wrapper from '../../../../hoc/wrapper';
import BlogWrapper from '../blogWrapper/blogWrapper';
import { MostReadSection } from '../mostRead/MostRead';
import BlogThirdSection from '../blogThirdSection/blogThirdSection';




async function HomePageMiddleSection  ()  {
   const getBlogUrl = "https://monil-news-letter-crud.vercel.app/article";
    let blogs = [];

    try {
        const response = await fetch(getBlogUrl);
        blogs = await response.json();
    } catch (err) {
        console.error("Failed to fetch blogs:", err);
    }

  return (
   
   
   <Wrapper>  
        {/* ------------------------ First Blog Section ---------------------- */}
        <BlogWrapper blogs={blogs} />       
        {/* ------------------------- Second Blog Section --------------------- */}
        <MostReadSection />

        <BlogThirdSection />

   
    </Wrapper>
  )
}

export default HomePageMiddleSection;