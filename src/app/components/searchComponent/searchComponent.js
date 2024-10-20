"use client"; // Add this directive at the top of your component

import React, { useState, useRef, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi'; // Import search icon from react-icons
import styles from './search.module.css'; // Import CSS module for styling
import Wrapper from '../../../../hoc/wrapper';
import useOutsideClick from '../../../../utils/useOutsideClick';

const SearchComponent = () => {
    const [isSearchInput, setIsSearchInput] = useState(false);
    const searchInputRef = useRef(null); // Reference to track the search input wrapper


    // Use custom hook to handle outside clicks
    useOutsideClick(searchInputRef, () => setIsSearchInput(false));

   

    const handleClick = () => {
        setIsSearchInput(!isSearchInput);
    };

    return (
        <Wrapper>
            {/* ----------------------- Search Icon --------------------------------- */}
            <div className='relative'>
                <button type="button" className={styles.searchButton} onClick={handleClick}>
                    <FiSearch size={20} />
                </button>

                {/* ------------------------- Search Input -------------------------------- */}
                {isSearchInput && (
                    <div ref={searchInputRef} className={styles.searchInputWrapper}>
                        <FiSearch size={20} />
                        <input type="text" className={styles.searchInput} placeholder="Search..." />
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

export default SearchComponent;
