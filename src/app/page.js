// app/page.jsx


import Wrapper from '../../hoc/wrapper';
import SEOHead from '../../html/SEOHead';
import CommonWrapper from '../../hoc/commonWrapper';
import MiddleWrapper from '../../hoc/middleWrapper';
import HomePageMiddleSection from './components/homePageMiddleSection/homePageMiddleSection';
import SearchBlogList from './components/searchBlogList/searchBlogList';



// Server Component to Render the Root Page with Query Parameter Handling
const HomePage =  ({ searchParams }) => {

  

  return (
    <Wrapper>
      {/* ----------------------- SEO Head Description -------------------------------------- */}
      <SEOHead
        title={"Home Page"}
        description={"Welcome to the Home Page"}
      />

      <div className="bg-white">
        <div className="md:w-full flex">
          {/* ------------------------ Containers For Ad Sense -------------------------------- */}
          <CommonWrapper />

          {/* ------------------------- Home Page Middle Section ------------------------------- */}
          <MiddleWrapper>
              <HomePageMiddleSection />
          </MiddleWrapper>

          {/* ------------------------ Containers For Ad Sense -------------------------------- */}
          <CommonWrapper />
        </div>
      </div>
    </Wrapper>
  );
};



export default HomePage;
