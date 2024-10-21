// app/page.jsx

import { getSearchResults } from '../../lib/fetchSearchResults';
import Wrapper from '../../hoc/wrapper';
import SEOHead from '../../html/SEOHead';
import CommonWrapper from '../../hoc/commonWrapper';
import MiddleWrapper from '../../hoc/middleWrapper';
import HomePageMiddleSection from './components/homePageMiddleSection/homePageMiddleSection';
import SearchBlogList from './components/searchBlogList/searchBlogList';

// Server Component to Render the Root Page with Query Parameter Handling
const HomePage = async ({ searchParams }) => {
  const searchQuery = searchParams?.s || ""; // Extract the `s` parameter from the query string
  // Fetch search results based on the search query
  const searchResults = searchQuery ? await getSearchResults(searchQuery) : [];

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
              <SearchBlogList searchResults={searchResults} searchQuery={searchQuery} />
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

// Component for rendering search results, to keep `HomePage` clean
const SearchResultsSection = ({ searchResults, searchQuery }) => {
  return (
    <div>
      <h1>Search Results for: {searchQuery}</h1>
      <p>Showing {searchResults.length} results for your search</p>
      <div className="results-grid">
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <div key={index} className="result-item">
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
