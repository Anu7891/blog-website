import React from 'react';
import dynamic from 'next/dynamic';
import { CATEGORIES_LISTS_URL, SUBCATEGORIES_URL } from '../../../../lib/config';

// Dynamically import BlogListing component, disabling SSR for client-side only functionality
const BlogListing = dynamic(() => import('@/app/components/blogListing/blogListing'), {
    ssr: false, // Ensures that this component is not rendered on the server side
});

// Generate metadata dynamically based on category
export async function generateMetadata({ params }) {
    const { id } = params;

    try {
        // Fetch category details for metadata
        const res = await fetch(CATEGORIES_LISTS_URL(id), {
            next: { revalidate: 60 } // Revalidate every 60 seconds to keep data fresh
        });

        if (!res.ok) throw new Error('Failed to fetch category data');
        const category = await res.json();

        const { categoryName, categoryDescription, categoryImage } = category?.catData || {};

        return {
            title: categoryName || 'Default Category Title',
            description: categoryDescription || 'Default Category Description',
            openGraph: {
                title: categoryName || 'Default Category Title',
                description: categoryDescription || 'Default Category Description',
                images: [
                    {
                        url: categoryImage || '/default-image.jpg',
                        width: 800,
                        height: 600,
                    },
                ],
            },
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: 'Default Title',
            description: 'Default description for this category',
        };
    }
}

// Generate static paths for category pages
export async function generateStaticParams() {
    try {
        const res = await fetch(`${SUBCATEGORIES_URL}`);
        if (!res.ok) throw new Error('Failed to fetch subcategories');
        const categories = await res.json();

        return categories.data.map((category) => ({
            id: category?.categoryId,
        }));
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

// Category page component
export default async function CategoryPage({ params }) {
    const { id } = params;

    // Fetch articles for the category
    try {
        const res = await fetch(CATEGORIES_LISTS_URL(id), {
            cache: 'no-store', next: { revalidate: 60 } // Revalidate every 60 seconds to avoid dynamic server error
        });

        if (!res.ok) throw new Error('Failed to fetch articles');
        const articles = await res.json();

        // Render BlogListing with fetched articles and categoryId
        return (
            <div>
                <BlogListing initialArticles={articles} categoryId={id} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching articles:", error);
        return <div>Failed to load articles. Please try again later.</div>;
    }
}

// Loading component to indicate loading state during SSR
export function Loading() {
    return <div>Loading articles...</div>;
}

// Error boundary component to handle errors during SSR
export function ErrorBoundary({ error }) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
        </div>
    );
}
