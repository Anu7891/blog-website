import React from 'react';
import Wrapper from '../../../hoc/wrapper';
import { API_BASE_URL } from '../../../lib/config';
import CustomImage from '../../../components/image/image';
import Header from '../../../components/header/header';
import Styles from "../styles/blogDetails.module.css";

// Fetch all possible article paths during the build
export async function generateStaticParams() {
    try {
        const res = await fetch(`${API_BASE_URL}`);
        const articles = await res.json();

        if (!articles?.data) {
            console.error("No articles found");
            return [];
        }

        return articles.data.map((article) => ({
            name: article.code, // Assuming 'code' is the unique identifier
        }));
    } catch (error) {
        console.error("Error fetching articles for static paths:", error);
        return [];
    }
}

// Fetch article data based on the 'name' dynamically during rendering
export default async function MainBlogDetails({ params }) {
    const { name } = params;

    // Fetch the specific article based on the 'name' (code)
    const res = await fetch(`${API_BASE_URL}?code=${name}`, {
        next: { revalidate: 60 * 60 }, // Revalidate every hour
    });

    const article = await res.json();

    if (!article?.data?.[0]) {
        return <div>Article not found</div>;
    }

    const { title, image, description, htmlDescription } = article.data[0];

    return (
        <Wrapper>
            {/* Header */}
            <Header />

            <div className="md:w-full flex">
                <div className="commonwrapper" />

                {/* Middle Section */}
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
