import React from 'react';
import Styles from "../blogWrapper/blogWrapper.module.css";

const SideArticles = ({ articles }) => {
    return (
        <div className="side-articles">
            {articles.map((article, index) => (
                <div key={index} className="side-article">
                    <div className={`${Styles?.articleImage}`} style={{ backgroundImage: `url(${article.imageUrl})` }}>
                    <div className={`${Styles?.overlayInner} gap_8`}>
                        <p className={`${Styles?.categoryLabel}`}>
                          <span>
                          {article?.category}
                          </span>
                          </p>
                          <p className='md:text-base mt-0'>{article?.title}</p>
                        <p className={`${Styles?.authorTitle}`}>
                            <span className='pr-1'>
                            By {article?.author} 
                            </span>
                             | {article?.date}</p>
                        </div>
                    </div>
                </div>
            ))}
            <style>
                {`
                    .side-articles {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr); /* Two columns */
                        grid-template-rows: repeat(2, 1fr);    /* Two rows */
                        gap: 20px;
                    }

                    .side-article {
                        height: 250px;
                        position: relative;
                    }
                        .gap_8 {
                         gap:0.5rem !important;
                        }
                `}
            </style>
        </div>
    );
};

export default SideArticles;
