import React from 'react'
import Wrapper from '../../../../hoc/wrapper';
import BlogWrapper from '../blogWrapper/blogWrapper';
import { MostReadSection } from '../mostRead/MostRead';
import BlogThirdSection from '../blogThirdSection/blogThirdSection';


const HomePageMiddleSection = () => {
  return (
   
   
   <Wrapper>  
        {/* ------------------------ First Blog Section ---------------------- */}
            <BlogWrapper />       
        {/* ------------------------- Second Blog Section --------------------- */}
        <MostReadSection />

        <BlogThirdSection />

   
    </Wrapper>
  )
}

export default HomePageMiddleSection;