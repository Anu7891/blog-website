import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Styles from "../blogWrapper/blogWrapper.module.css";
const SideArticles = dynamic(() => import('../sideArticles/sideArticles'));
// import { ARTICLE_IMAGE_FOUR, ARTICLE_IMAGE_ONE, ARTICLE_IMAGE_THREE, ARTICLE_IMAGE_TWO, BANNER_IMAGE_FIRST } from '../../../../lib/config';



const BlogWrapper = ({firstSectionBlogs =[]}) => {

    return (
     
        <div className={`${Styles?.newsGrid} pt-5 mt-5`}>
            <div className={`${Styles?.mainArticle}`}>
                <Link
                    href={`/${firstSectionBlogs[0]?.code}`}
                    className={Styles?.articleImage}
                    style={{ backgroundImage: `url(${firstSectionBlogs[0]?.image || ''})` }}
                >
                      <div className={`${Styles?.overlayInner}`}>
                        <p className={`${Styles?.description} mb-0 md:w-11/12 md:text-3xl lg:text-4xl mt-0`}>{firstSectionBlogs[0].title}</p>
                      </div>
                </Link>
            </div>
            <SideArticles articles={firstSectionBlogs.slice(1)}/>
        </div>
        
    );
};

export default BlogWrapper;
