'use client'; // Ensures this is a client-side component
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import CustomLoader from '../../../../components/loader/customLoader';
import CustomTitle from '../../../../components/title/customTitle';
import CommonWrapper from '../../../../hoc/commonWrapper';
import MiddleWrapper from '../../../../hoc/middleWrapper';
import Wrapper from '../../../../hoc/wrapper';
import Styles from '../../components/subCategoriesList/subCategories.module.css';

// Dynamically import CustomImage
const CustomImage = dynamic(() => import('../../../../components/image/image'));

export default function BlogListing({ initialArticles, categoryId }) {
    const pencount = initialArticles?.pencount;
    const [articles, setArticles] = useState(initialArticles?.data.slice(0, 10) || []); // Start with 10 articles only
    const [catData, setCatData] = useState(initialArticles?.catData || null);
    const [skip, setSkip] = useState(articles?.length); // Set skip based on initially loaded articles
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Assume there are more articles initially

    // Fetch more articles on scroll
    const fetchMoreArticles = async () => {
        if (loading || !hasMore) return; // Prevent duplicate fetch or fetching if no more articles
        setLoading(true);

        try {
            const res = await fetch(`https://monil-news-letter-crud.vercel.app/articleList?categoryId=${categoryId}&skip=${skip}&limit=10`);
            const newArticles = await res.json();

            if (newArticles?.data?.length === 0 || articles.length + newArticles.data.length >= pencount) {
                setHasMore(false); // No more articles to load if max pencount is reached
            }

            if (newArticles?.data?.length > 0) {
                setArticles((prev) => [...prev, ...newArticles.data]); // Append new articles
                setSkip((prevSkip) => prevSkip + newArticles.data.length); // Increase skip for next fetch
            }
        } catch (error) {
            console.error("Error fetching more articles:", error);
        } finally {
            setLoading(false);
        }
    };

    // Infinite scroll detection
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
                fetchMoreArticles(); // Load more articles when scrolled to the bottom
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);

    return (
        <Wrapper>
            {/* --------------------------------- Body Content -------------------------------------------- */}
            <div className="md:w-full flex">
                <CommonWrapper />

                {/* --------------------------------  Middle Section ----------------------------------- */}
                <MiddleWrapper>
                    <div className="px-4 md:px-0 pt-24 md:pt-5 pb-3">
                        {/* Category Name */}
                        <p className={`${Styles?.categoryTitle} pb-3`}>
                            {catData?.categoryName || <div className="w-32 h-6 bg-gray-300 shimmer" />}
                        </p>

                        {/* Category Description */}
                        <div className="flex pb-0 md:pb-3 flex-wrap col-span-12 px-0">
                            {catData?.categoryDescription || catData?.description ? (
                                <p className="w-full md:w-8/12 pr-3">
                                    {catData.categoryDescription || catData.description}
                                </p>
                            ) : (
                            <div className="w-full md:w-8/12 flex flex-col justify-start items-center pr-5">
                                <div className="w-full h-6 bg-gray-300 shimmer mt-1"></div>
                                <div className="w-full h-6 bg-gray-300 shimmer mt-1"></div>
                                <div className="w-full h-6 bg-gray-300 shimmer mt-1"></div>
                                <div className="w-full h-6 bg-gray-300 shimmer mt-1"></div>
                                <div className="w-full h-6 bg-gray-300 shimmer mt-1"></div>
                                <div className="w-full h-6 bg-gray-300 shimmer mt-1"></div>
                            </div>
                            )}


                            {/* Category Image */}
                            {catData?.categoryImage ? (
                                <div className={`${Styles?.customImageClass} w-full md:w-4/12 px-0 flex flex-col items-start`}>
                                    <CustomImage
                                        src={catData?.categoryImage}
                                        height={500}
                                        width={500}
                                        title={catData?.categoryName}
                                        alt={catData?.categoryName}
                                        priority={true}
                                        unoptimized
                                    />
                                </div>
                            ) : (
                                <div className="w-full md:w-4/12 px-0 flex flex-col items-start">
                                    <div className="w-full h-64 bg-gray-300 shimmer"></div>
                                </div>
                            )}
                        </div>

                        {/* Related Articles Title */}
                        <CustomTitle
                            title={`Related ${catData?.categoryName?.replace(/Articles/i, '').trim()} Articles`}
                            className={"mt-4 md:mt-2"}
                        />

                        {/* Related Articles Data */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                            {loading
                                ? Array.from({ length: 6 }).map((_, index) => (
                                    <div
                                        key={`shimmer-${index}`}
                                        className="border rounded-lg overflow-hidden shadow-md shimmer bg-gray-200"
                                    >
                                        {/* Shimmer effect for the image */}
                                        <div className="w-full h-48 bg-gray-300 shimmer"></div>
                                        <div className="p-4">
                                            {/* Shimmer effect for the title */}
                                            <div className="w-full h-6 bg-gray-300 shimmer mb-2"></div>
                                            <div className="w-2/3 h-6 bg-gray-300 shimmer"></div>
                                        </div>
                                    </div>
                                ))
                                : articles?.map((item, index) => (
                                    <a
                                        href={`/${item?.code}`}
                                        key={item?.code + index + item?.title + "subCategoriesData"}
                                        className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                                    >
                                        {/* Image on top */}
                                        {item?.image ? (
                                            <div className="subCategoriesImgWrapper bg-gray-200">
                                                <CustomImage
                                                    src={item.image}
                                                    alt={item?.title}
                                                    className="w-full h-full object-cover"
                                                    width={640}
                                                    height={480}
                                                    key={item?.code + index + item?.title + "subCategoriesData"}
                                                    priority={[0, 1, 2, 3, 4, 5]?.includes(index)}
                                                    unoptimized={![0, 1, 2, 3, 4, 5]?.includes(index)}
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-gray-400">
                                                No Image Available
                                            </div>
                                        )}

                                        {/* Title at bottom */}
                                        <div className="p-4">
                                            <h2 className="text-lg font-semibold text-gray-800">{item?.title}</h2>
                                        </div>
                                    </a>
                                ))}
                        </div>

                        {/* Loader */}
                        {loading && <CustomLoader />}

                        {/* No more articles message */}
                        {/* {!hasMore && <div>No more articles to load.</div>} */}
                    </div>
                </MiddleWrapper>

                <CommonWrapper />
            </div>
        </Wrapper>
    );
}
