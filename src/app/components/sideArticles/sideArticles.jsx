import React from 'react';
import Styles from "../blogWrapper/blogWrapper.module.css";
import Link from 'next/link';

const SideArticles = ({ articles }) => {

    console.log(articles,"ddvghdghd")
    return (
        <div className={`${Styles?.sideArticles}`}>
            {articles.map((article, index) => (
                <div key={index} className={`${Styles?.sideArticle}`}>
                    <Link href={article?.code || ""} className={`${Styles?.sideArticleImage}`} style={{ backgroundImage: `url(${article?.image})` }}>
                       <div className={`${Styles?.overlayInner} gap_8`}>
                        {/* <p className={`${Styles?.categoryLabel}`}>
                          <span>
                          {article?.category}
                          </span>
                          </p> */}
                          <p className={`${Styles?.description} mb-0 md:text-base mt-0`}>{article?.title}</p>
                        {/* <p className={`${Styles?.authorTitle}`}>
                            <span className='pr-1'>
                            By {article?.author} 
                            </span>
                             | {article?.date}</p> */}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SideArticles;
