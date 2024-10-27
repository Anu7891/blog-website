"use client";

import React, { useState, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { GoArrowRight } from 'react-icons/go';
import styles from './search.module.css';
import Wrapper from '../../../../hoc/wrapper';
import useOutsideClick from '../../../../utils/useOutsideClick';
import Input from '../../../../components/customInput/customInput';
import { useRouter } from 'next/navigation'; // Import the router for programmatic navigation

const SearchComponent = () => {
    const [isSearchInput, setIsSearchInput] = useState(false);
    const [query, setQuery] = useState(''); // State to hold the search query
    const searchInputRef = useRef(null);
    const router = useRouter(); // Router to handle navigation
    const searchId = "searchInputWrapper";

    // Function to handle clicking the "Go" arrow button
    const handleSearch = () => {
        if (query.trim() !== '') {
            router.push(`/search?q=${query}`); // Navigate to a new URL with the search query
        }
    };


    // Use custom hook to handle outside clicks
    useOutsideClick(searchInputRef, () => setIsSearchInput(false), searchId);

    const handleClick = () => {
        setIsSearchInput((prevState) => !prevState);
    };

    return (
        <Wrapper>
            {/* ----------------------- Search Icon --------------------------------- */}
            <div className="relative">
                <button
                    type="button"
                    className={styles.searchButton}
                    onClick={handleClick}
                    ref={searchInputRef}
                >
                    <FiSearch size={20} />
                </button>

                {/* ------------------------- Search Input Wrapper -------------------------------- */}
                {isSearchInput && (
                    <div className={styles.searchInputWrapper} id={searchId}>
                        {/* Search Icon */}
                        <FiSearch size={20} />

                        {/* Search Input Field */}
                        <Input
                            type="text"
                            placeholder="Search Topics"
                            className={styles.searchInput}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />

                        {/* Go Arrow Button to Submit Search */}
                        <div onClick={handleSearch} >
                            <GoArrowRight size={20} />
                        </div>
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

export default SearchComponent;
