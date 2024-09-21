import React from 'react'
import Wrapper from '../../../../hoc/wrapper';
import BlogWrapper from '../blogWrapper/blogWrapper';
import { MostReadSection } from '../mostRead/MostRead';
import BlogThirdSection from '../blogThirdSection/blogThirdSection';
import { API_BASE_URL } from '../../../../lib/config';
import SubCategoriesLists from '../subCategoriesList/subCategoriesList';




async function HomePageMiddleSection() {
  let blogs = [];

  try {
    const response = await fetch(API_BASE_URL);
    blogs = await response.json();
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
  }

  const firstSectionBlogs = blogs.data?.slice(0, 5);
  const secondSectionBlogs = blogs.data?.slice(6, 10);

  return (


    <Wrapper>
      {/* ------------------------ First Blog Section ---------------------- */}
      <BlogWrapper firstSectionBlogs={firstSectionBlogs} />

      <div className='containerWrapper'>

        {/* ------------------------- Second Blog Section --------------------- */}
        <MostReadSection blogs={secondSectionBlogs} />

        {/* ------------------------- Second Blog Section --------------------- */}
        <SubCategoriesLists/>


      </div>

    </Wrapper>
  )
}

export default HomePageMiddleSection;