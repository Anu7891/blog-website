'use client'; // Ensures this is a client-side component
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Wrapper from '../../../../hoc/wrapper';
import Header from '../../../../components/header/header';
import CustomTitle from '../../../../components/title/customTitle';
import MiddleWrapper from '../../../../hoc/middleWrapper';
import CommonWrapper from '../../../../hoc/commonWrapper';
import Styles from '../../components/subCategoriesList/subCategories.module.css';
import CustomLoader from '../../../../components/loader/customLoader';
import Footer from '../../../../components/footer/Footer';

// Dynamically import CustomImage
const CustomImage = dynamic(() => import('../../../../components/image/image'));

export default function BlogListing({ initialArticles, categoryId }) {
    const pencount = initialArticles?.pencount; 
    const [articles, setArticles] = useState(initialArticles?.data.slice(0, 10) || []); // Start with 10 articles only
    const [catData, setCatData] = useState(initialArticles?.catData || null);
    const [skip, setSkip] = useState(articles?.length); // Set skip based on initially loaded articles (4)
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
            <Header />
            <div className="md:w-full flex">
                <CommonWrapper />

                {/* --------------------------------  Middle Section ----------------------------------- */}
                <MiddleWrapper>
                    <div className="px-4 md:px-0 pt-24 md:pt-5 pb-3">
                        <p className={`${Styles?.categoryTitle} pb-3`}>{catData?.categoryName}</p>
                        <div className="flex pb-0 md:pb-3 flex-wrap col-span-12 px-0">
                            {catData?.categoryDescription || catData?.description ? (
                                <p className="w-full md:w-8/12 pr-3">
                                    {catData.categoryDescription || catData.description}
                                </p>
                            ) : (
                                <p className="w-full md:w-8/12 flex justify-center items-center noDescriptionsFound pr-5">
                                    No Descriptions Found!
                                </p>
                            )}
                            {catData?.categoryImage && (
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
                            )}
                        </div>

                        {/* ------------------------------- Related Articles Title ------------------------ */}
                        <CustomTitle
                         title={`Related ${catData?.categoryName?.replace(/Articles/i, '').trim()} Articles`}
                         className={"mt-4 md:mt-2"} 
                        />

                        {/* ------------------------------- Related Articles Data ------------------------ */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                            {articles?.map((item, index) => (
                                <a
                                    href={`/${item?.code}`}
                                    key={item?.code + index + item?.title + "subCategoriesData"}
                                    className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    {/* Image on top */}
                                    {item?.image ? (
                                        <div className="subCategoriesImgWrapper bg-gray-200">
                                            <CustomImage
                                                src={item.image} // Remove cache-busting for priority images
                                                alt={item?.title}
                                                className="w-full h-full object-cover"
                                                width={640} // Width for 4:3 aspect ratio
                                                height={480} // Height for 4:3 aspect ratio
                                                key={item?.code + index + item?.title + "subCategoriesData"}
                                                priority={[0, 1, 2, 3,4,5]?.includes(index)}
                                                unoptimized={![0, 1, 2,3,4,5]?.includes(index)}
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-gray-400">
                                            No Image Available
                                        </div>
                                    )}

                                    {/* Title at bottom */}
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            {item?.title}
                                        </h2>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Loader */}
                        {loading && <CustomLoader/> }

                        {/* No more articles message */}
                        {/* {!hasMore && <div>No more articles to load.</div>} */}
                    </div>
                </MiddleWrapper>

                <CommonWrapper />
            </div>
             <Footer/>
        </Wrapper>
    );
}
