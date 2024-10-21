"use client"
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Using react-icons for the search icon

const SearchBar = ({ onSearch, className ="" }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        if (onSearch && query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className={`flex items-center bg-white  shadow-lg px-4 py-3  w-full max-w-xl mx-auto ${className}`}>
            {/* Search Icon */}
            <FiSearch className="text-gray-500 mr-2" size={20} />

            {/* Input Field */}
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search Topics"
                className="flex-grow focus:outline-none text-gray-800 placeholder-gray-500"
            />

            {/* Search Button */}
            <button
                onClick={handleSearch}
                className="text-orange-500 font-semibold ml-4"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
