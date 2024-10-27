
import React from 'react';
import SearchBlogList from '../components/searchBlogList/searchBlogList';
import CommonWrapper from '../../../hoc/commonWrapper';
import MiddleWrapper from '../../../hoc/middleWrapper';
import { getSearchResults } from '../../../lib/fetchSearchResults';



export default async function SearchPage({ searchParams }) {
    const query = searchParams.q;
    const searchResults = query ? await getSearchResults(query) : [];

    return (
        <div className="md:w-full flex">
            {/* ------------------------ Containers For Ad Sense -------------------------------- */}
            <CommonWrapper />

            {/* ------------------------- Home Page Middle Section ------------------------------- */}
            <MiddleWrapper>
                <SearchBlogList searchQuery={query} searchResults={searchResults} />
            </MiddleWrapper>

            {/* ------------------------ Containers For Ad Sense -------------------------------- */}
            <CommonWrapper />
        </div>
    );
}
