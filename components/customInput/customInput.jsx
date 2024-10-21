"use client";

import React from 'react';

const Input = ({ type = "text", placeholder = "Search.....", value = "", onChange, className ="" }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
