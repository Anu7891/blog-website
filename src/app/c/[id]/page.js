import React from 'react';
import { API_BASE_URL } from '../../../../lib/config';
import Wrapper from '../../../../hoc/wrapper';
import Header from '../../../../components/header/header';
import CustomImage from '../../../../components/image/image';
import { notFound } from 'next/navigation'; // For handling 404s
import Styles from "../../components/subCategoriesList/subCategories.module.css"

// Generate static paths for category pages
export async function generateStaticParams() {
    try {
        const res = await fetch(`${API_BASE_URL}/categoryList`);
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

export default async function CategoryPage({ params }) {
    const { id } = params;

    // Fetch articles for the category
    let articles;
    try {
        const res = await fetch(`https://monil-news-letter-crud.vercel.app/articleList?categoryId=${id}`);
        if (!res.ok) throw new Error('Failed to fetch articles');
        articles = await res.json();
    } catch (error) {
        console.error("Error fetching articles:", error);
        return <div>Failed to load articles. Please try again later.</div>;
    }

    if (!articles.data || articles.data.length === 0) {
        notFound(); // Handle no articles found
    }

    const { catData } = articles;

    return (
        <Wrapper>
            <Header />
            <div className="md:w-full flex">
                <div className="commonwrapper" />

                {/* Middle Section */}
                <div className="middleWrapper">
                    <div className="px-4 pt-5 pb-3">
                        <p className={`${Styles?.categoryTitle} pb-3`}>{catData?.categoryName}</p>
                        <CustomImage
                            src={catData?.categoryImage}
                            height={500}
                            width={500}
                            title={catData?.categoryName}
                            alt={catData?.categoryName}
                            priority={true} // Optimize image for faster load
                            className={`${Styles?.customImageClass}`}
                        />
                    </div>
                </div>

                <div className="commonwrapper" />
            </div>
        </Wrapper>
    );
}
