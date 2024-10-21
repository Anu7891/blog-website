import React from "react";
import dynamic from "next/dynamic";
import Wrapper from "../../../../hoc/wrapper";
import styles from "./searchBlogList.module.css";
import CustomLink from "../../../../components/customLink/customLink";
import SearchBar from "../searchComponent/searchBar";

const CustomImage = dynamic(() => import("../../../../components/image/image"));

const SearchBlogList = ({ searchResults = [], searchQuery ="" }) => {

    const searchData = searchResults?.data;
    const searchResultsLength = searchResults?.data?.length;

  

    return (
        <Wrapper>
            <div className="my-5 py-2">
            <div className={`flex  flex-col items-center justify-center ${styles?.searchText}`}>
                Search Results for: {searchQuery}
                <p className={styles?.searchResults}>Showing {searchResultsLength} results for your search</p>
             </div>

                {/* <SearchBar className={"mt-7 py-3 mb-4 rounded-xl"}  /> */}

            <div className="p-4 mt-6 mb-5">
                {searchResultsLength > 0 ? (
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ">
                         {searchData.map((searchLists, searchIndex) => (
                            <div
                                key={searchLists?.categoryId + searchLists?.code + searchIndex}
                                className={`bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow ${styles?.searchListClass}`}
                            >
                                <CustomLink href={`/${searchLists?.code}`} prefetch >
                                    {searchLists?.image && (
                                    <CustomImage
                                        className="w-full h-auto object-cover rounded-md"
                                        src={searchLists?.image}
                                        alt={`${searchLists?.categoryName} icon`}
                                        title={`${searchLists?.categoryName} icon`}
                                        priority={[0, 1, 2, 3, 4, 5]?.includes(searchIndex)}
                                        unoptimized={[0, 1, 2, 3, 4, 5]?.includes(searchIndex)}
                                    />
                                    )}

                                    {searchLists?.title && (
                                        <h3 className={`mt-4 text-lg font-semibold text-gray-800 ${styles?.truncate}`}>
                                            {searchLists.title}
                                        </h3>
                                    )}

                                </CustomLink>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No search results found.</p>
                )}
            </div>

            </div>
        </Wrapper>
    );
};

export default SearchBlogList;
