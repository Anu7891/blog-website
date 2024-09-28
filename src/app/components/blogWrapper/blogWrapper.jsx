import React from 'react';
import dynamic from 'next/dynamic';
import Styles from "../blogWrapper/blogWrapper.module.css";
const CustomLink = dynamic(() => import('../../../../components/customLink/customLink'));
const SideArticles = dynamic(() => import('../sideArticles/sideArticles'));



const BlogWrapper = ({firstSectionBlogs =[]}) => {
    return (
        <div className={`${Styles?.newsGrid} pt-5 mt-4`}>
            <div className={`${Styles?.mainArticle}`}>
                <CustomLink
                    href={`/${firstSectionBlogs[0]?.code}`}
                    className={Styles?.articleImage}
                    style={{ backgroundImage: `url(${firstSectionBlogs[0]?.image || ''})` }}
                >
                      <div className={`${Styles?.overlayInner}`}>
                        <p className={`${Styles?.description} mb-0 md:w-11/12 md:text-3xl lg:text-4xl mt-0`}>{firstSectionBlogs[0]?.title}</p>
                      </div>
                </CustomLink>
            </div>
            <SideArticles articles={firstSectionBlogs.slice(1)}/>
        </div>
    );
};

export default BlogWrapper;
