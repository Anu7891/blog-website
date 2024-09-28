import React from 'react';
import dynamic from 'next/dynamic';
import {CATEGORIES_LISTS_URL, SUBCATEGORIES_URL } from '../../../../lib/config';
const BlogListing = dynamic(() => import('@/app/components/blogListing/blogListing'));


// Generate static paths for category pages
export async function generateStaticParams() {
    try {
        const res = await fetch(`${SUBCATEGORIES_URL}`);
        if (!res.ok) throw new Error('Failed to fetch categories');
        const categories = await res.json();

        return categories.data.map((category) => ({
            id: category?.categoryId,
        }));
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

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


    return <BlogListing initialArticles={articles} categoryId={id} />;
}
