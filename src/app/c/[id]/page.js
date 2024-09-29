import React from 'react';
import dynamic from 'next/dynamic';
import { CATEGORIES_LISTS_URL, SUBCATEGORIES_URL } from '../../../../lib/config';

// Dynamically import BlogListing component
const BlogListing = dynamic(() => import('@/app/components/blogListing/blogListing'));

// Generate metadata dynamically based on category
export async function generateMetadata({ params }) {
    const { id } = params;

    try {
        // Fetch category details for metadata
        const res = await fetch(CATEGORIES_LISTS_URL(id), { cache: 'no-store' });
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
export default async function Category({ params }) {
    const { id } = params;

    // Fetch articles for the category
    let articles;
    try {
        const res = await fetch(CATEGORIES_LISTS_URL(id), {
            cache: 'no-store', // Fetch fresh data on each request
        });

        if (!res.ok) throw new Error('Failed to fetch articles');
        articles = await res.json();
    } catch (error) {
        console.error("Error fetching articles:", error);
        return <div>Failed to load articles. Please try again later.</div>;
    }

    // Render BlogListing with fetched articles and categoryId
    return <BlogListing initialArticles={articles} categoryId={id} />;
}
