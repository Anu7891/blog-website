import React from 'react';
import Wrapper from '../../../hoc/wrapper';
import { API_BASE_URL } from '../../../lib/config';
import CustomImage from '../../../components/image/image';
import Header from '../../../components/header/header';
import Styles from "../styles/blogDetails.module.css";
import CommonWrapper from '../../../hoc/commonWrapper';
import MiddleWrapper from '../../../hoc/middleWrapper';
import Footer from '../../../components/footer/footer';

// Fetch all possible article paths during the build
export async function generateStaticParams() {
    try {
        const res = await fetch(`${API_BASE_URL}`);
        const articles = await res.json();

        if (!articles?.data || articles.data.length === 0) {
            console.error("No articles found");
            return []; // Return an empty array if no articles are available
        }

        return articles.data.map((article) => ({
            name: article.code, // Assuming 'code' is the unique identifier for each article
        }));
    } catch (error) {
        console.error("Error fetching articles:", error);
        return []; // Return an empty array in case of an error
    }
}

// Fetch article data based on the 'name' dynamically during rendering
export default async function MainBlogDetails({ params }) {
    const { name } = params;

    // Fetch the specific article based on the 'name' (code)
    try {
        const res = await fetch(`${API_BASE_URL}?code=${name}`, {
            cache: 'no-store', // Always fetch fresh data
        });

        const article = await res.json();

        // Check if article exists
        if (!article?.data?.[0]) {
            return <div>Article not found</div>;
        }

        const { title, image, description, htmlDescription } = article?.data?.[0];
        

        return (
            <Wrapper>
                {/* ---------------------------------- Header---------------------------------- */}
                <Header />

                <div className="md:w-full flex">
                    
                    <CommonWrapper />

                    {/* Middle Section */}
                    <MiddleWrapper>
                        <div className="px-4 md:px-0 mb-5 md:pb-6 md:pt-0 pt-8">
                            {/* Title */}
                            {title && 
                            <p className={`${Styles?.title} capitalize`}>{title}</p>}

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
                            {htmlDescription || description ?
                            <p
                                dangerouslySetInnerHTML={{ __html: htmlDescription || description }}
                                className={Styles?.description}
                            /> : null}
                        </div>
                    </MiddleWrapper>

                     <CommonWrapper/>
                </div>

                <Footer/>
            </Wrapper>
        );
    } catch (error) {
        console.error("Error fetching article:", error);
        return <div>Failed to load article</div>;
    }
}
