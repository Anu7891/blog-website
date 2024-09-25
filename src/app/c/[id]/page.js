import React from 'react';
import dynamic from 'next/dynamic';
import { API_BASE_URL } from '../../../../lib/config';
import Wrapper from '../../../../hoc/wrapper';
import Header from '../../../../components/header/header';
import Styles from "../../components/subCategoriesList/subCategories.module.css"
import CustomTitle from '../../../../components/title/customTitle';
import MiddleWrapper from '../../../../hoc/middleWrapper';
import CommonWrapper from '../../../../hoc/commonWrapper';
const CustomImage = dynamic(() => import('../../../../components/image/image'));


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
        return <div>No articles found.</div>;
    }

    const { catData , data} = articles;

  

    return (
        <Wrapper>
            <Header />
            <div className="md:w-full flex">
                <CommonWrapper/>

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
                                    />
                                </div>
                            )}
                        </div>


                        {/* ------------------------------- Related Articles Title ------------------------ */}
                        <CustomTitle title={`Related ${catData?.categoryName} Articles`} className={"mt-4 md:mt-2"} />

                        {/* ------------------------------- Related Articles Data ------------------------ */}
                       {data?.length > 0 ? 
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                            {data?.map((item, index) => (
                                <a
                                    href={`/${item?.code}`}
                                    key={ item?.code + index + item?.title + "subCategoriesData"}
                                    className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    {/* Image on top */}
                                    {item?.image ? (
                                        <div className="subCategoriesImgWrapper bg-gray-200">
                                            <CustomImage
                                                src={`${item.image}?t=${new Date().getTime()}`} // Cache-busting added here
                                                alt={item?.title}
                                                className="w-full h-full object-cover"
                                                width={640} // Width for 4:3 aspect ratio
                                                height={480} // Height for 4:3 aspect ratio
                                                key={item?.code + index + item?.title + "subCategoriesData"}
                                                priority={[0, 1, 2, 3]?.includes(index)}
                                                unoptimized
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
                        </div> : null}

                    </div>
                </MiddleWrapper>

                <CommonWrapper />

            </div>
        </Wrapper>
    );
}
