"use client"
import { useEffect } from 'react';

/**
 * Custom hook to handle clicks outside a given ref.
 *
 * @param {React.RefObject} ref - The reference to the element.
 * @param {Function} callback - The function to call when clicking outside the ref.
 */
const useOutsideClick = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        // Add event listener when component mounts
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener when component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
};

export default useOutsideClick;
