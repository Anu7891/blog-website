// app/page.jsx

import Wrapper from '../../hoc/wrapper';
import SEOHead from '../../html/SEOHead';
import CommonWrapper from '../../hoc/commonWrapper';
import MiddleWrapper from '../../hoc/middleWrapper';
import HomePageMiddleSection from './components/homePageMiddleSection/homePageMiddleSection';
import SearchBlogList from './components/searchBlogList/searchBlogList';

// Force the page to be rendered dynamically, so it can handle query parameters at runtime
export const dynamic = "force-dynamic";


// Server Component to Render the Root Page with Query Parameter Handling
const HomePage = async ({ searchParams }) => {
  const searchQuery = searchParams?.s || ""; // Extract the `s` parameter from the query string
  return (
    <Wrapper>
      {/* ----------------------- SEO Head Description -------------------------------------- */}
      <SEOHead
        title={searchQuery ? `Search Results for: ${searchQuery}` : "Home Page"}
        description={searchQuery ? `Showing results for: ${searchQuery}` : "Welcome to the Home Page"}
      />

      <div className="bg-white">
        <div className="md:w-full flex">
          {/* ------------------------ Containers For Ad Sense -------------------------------- */}
          <CommonWrapper />

          {/* ------------------------- Home Page Middle Section ------------------------------- */}
          <MiddleWrapper>
            {searchQuery ? (
              <SearchBlogList searchQuery={searchQuery} />
            ) : (
              <HomePageMiddleSection />
            )}
          </MiddleWrapper>

          {/* ------------------------ Containers For Ad Sense -------------------------------- */}
          <CommonWrapper />
        </div>
      </div>
    </Wrapper>
  );
};



export default HomePage;
