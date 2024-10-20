"use client";

import { useEffect } from 'react';

/**
 * Custom hook to handle clicks outside a given ref.
 *
 * @param {React.RefObject} ref - The reference to the element.
 * @param {Function} callback - The function to call when clicking outside the ref.
 * @param {string} [ignoreId] - An optional ID of an element to ignore clicks on.
 */
const useOutsideClick = (ref, callback, ignoreId) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If an `ignoreId` is provided and the click is inside that element, do nothing
            if (ignoreId && event.target.closest(`#${ignoreId}`)) {
                return;
            }

            // If clicking outside of the referenced element, invoke callback
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        // Add event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback, ignoreId]);
};

export default useOutsideClick;
