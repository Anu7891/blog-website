"use client"; // Add this directive at the top of your component

import React, { useState, useRef } from 'react';
import { FiSearch } from 'react-icons/fi'; // Import search icon from react-icons
import styles from './search.module.css'; // Import CSS module for styling
import Wrapper from '../../../../hoc/wrapper';
import useOutsideClick from '../../../../utils/useOutsideClick';

const SearchComponent = () => {
    const [isSearchInput, setIsSearchInput] = useState(false);
    const searchInputRef = useRef(null); // Reference to track the search input wrapper

    const searchId = "search-options";

    // Use custom hook to handle outside clicks
    useOutsideClick(searchInputRef, () => setIsSearchInput(false), searchId);

    // Handle search button click
    const handleClick = () => {
        setIsSearchInput((prevState) => !prevState);
    };

    return (
        <Wrapper>
            {/* ----------------------- Search Icon --------------------------------- */}
            <div className='relative'>
                <button
                    type="button"
                    className={styles.searchButton}
                    onClick={handleClick}
                    ref={searchInputRef}
                >
                    <FiSearch size={20} />
                </button>

                {/* ------------------------- Search Input -------------------------------- */}
                {isSearchInput && (
                    <div className={styles.searchInputWrapper} id={searchId}>
                        <FiSearch size={20} />
                        <input type="text" className={styles.searchInput} placeholder="Search..." />
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

export default SearchComponent;
