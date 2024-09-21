import React from 'react';
import Wrapper from '../../../hoc/wrapper';
import { API_BASE_URL } from '../../../lib/config';
import CustomImage from '../../../components/image/image';
import Header from '../../../components/header/header';
import Styles from "../styles/blogDetails.module.css";

export async function generateStaticParams() {
    try {
        const res = await fetch(`${API_BASE_URL}`);
        const articles = await res.json();

        // Check if the data exists and is in the correct format
        if (!articles?.data) {
            console.error("Failed to fetch articles or no data found.");
            return [];
        }

        // Return the dynamic paths based on the article codes
        return articles?.data?.map((article) => ({
            name: article?.code, // Assuming 'code' is the unique identifier for each article
        }));
    } catch (error) {
        console.error("Error fetching dynamic params:", error);
        return [];
    }
}

export default async function MainBlogDetails({ params }) {
    const { name } = params;

    let article;
    try {
        // Fetch the article data based on the article code (name)
        const res = await fetch(`${API_BASE_URL}?code=${name}`, {
            next: { revalidate: 1 * 60 * 60 }, // 1 hour revalidation
        });

        article = await res.json();

        // Check if the response contains valid data
        if (!article?.data?.[0]) {
            console.error("Article data not found for code:", name);
            return <div>Article not found</div>;
        }
    } catch (error) {
        console.error("Error fetching article:", error);
        return <div>Failed to load article data</div>;
    }

    // Destructure article data for cleaner usage
    const { title, image, description, htmlDescription } = article?.data?.[0];

    return (
        <Wrapper>
            {/* ----------------------------- Header -------------------------------- */}
            <Header />

            <div className="md:w-full flex">
                <div className="commonwrapper" />

                {/* ------------------- Blogs Middle Section ------------------------------------ */}
                <div className="middleWrapper">
                    <div className="px-4 md:px-0 mb-5 md:pb-6">
                        {/* Title */}
                        <p className={Styles?.title}>{title}</p>

                        {/* Image */}
                        {image && (
                            <div className={`${Styles?.imgWrapper} col-12 px-0 pb-5`}>
                                <CustomImage
                                    src={image}
                                    alt={title}
                                    title={title}
                                    height={500}
                                    width={500}
                                    priority
                                    unoptimized
                                />
                            </div>
                        )}

                        {/* Description */}
                        <p
                            dangerouslySetInnerHTML={{ __html: description || htmlDescription }}
                            style={{ fontFamily: 'Lato, sans-serif', fontSize: '16px' }}
                            className={Styles?.description}
                        />
                    </div>
                </div>

                <div className="commonwrapper" />
            </div>
        </Wrapper>
    );
}
