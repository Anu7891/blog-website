import React from 'react';
import Styles from "../blogWrapper/blogWrapper.module.css";

const SideArticles = ({ articles }) => {
    return (
        <div className={`${Styles?.sideArticles}`}>
            {articles.map((article, index) => (
                <div key={index} className={`${Styles?.sideArticle}`}>
                    <div className={`${Styles?.sideArticleImage}`} style={{ backgroundImage: `url(${article?.image})` }}>
                    <div className={`${Styles?.overlayInner} gap_8`}>
                        {/* <p className={`${Styles?.categoryLabel}`}>
                          <span>
                          {article?.category}
                          </span>
                          </p> */}
                          <p className={`${Styles?.description} md:text-base mt-0`}>{article?.title}</p>
                        {/* <p className={`${Styles?.authorTitle}`}>
                            <span className='pr-1'>
                            By {article?.author} 
                            </span>
                             | {article?.date}</p> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideArticles;
