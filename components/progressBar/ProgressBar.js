// app/components/ProgressBar.js
"use client"; // Ensure this component is treated as a client component

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ProgressBar = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true); // Start loading true to show on initial render
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleStart = () => {
            setLoading(true);
            setProgress(0);
        };

        const handleComplete = () => {
            setLoading(false);
            setProgress(100);
            setTimeout(() => setProgress(0), 300); // Reset after a short delay
        };

        // Simulate progress for demonstration purposes
        const simulateProgress = () => {
            setProgress(0);
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 90) {
                        clearInterval(interval);
                        handleComplete();
                        return 100;
                    }
                    return Math.min(prev + 10, 90); // Increment progress
                });
            }, 100); // Adjust the interval as needed
        };

        // Trigger loading state on pathname change
        const handlePathChange = () => {
            handleStart();
            simulateProgress(); // Start simulating progress on path change
        };

        // Start loading for the current pathname
        handleStart();
        simulateProgress();

        // Add pathname change effect
        const unlisten = () => {
            handlePathChange();
        };

        // Add listener for pathname changes
        window.addEventListener("popstate", unlisten); // Listen for popstate (back/forward navigation)

        return () => {
            clearInterval(); // Clear the interval on cleanup
            window.removeEventListener("popstate", unlisten); // Clean up event listener
        };
    }, [pathname]);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-1 bg-black transition-opacity duration-300 ${loading ? "opacity-100" : "opacity-0"
                }`}
        >
            <div
                className={`h-full bg-white transition-all duration-300`}
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ProgressBar;
