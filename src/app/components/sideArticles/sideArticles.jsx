import React from 'react';
import Styles from "../blogWrapper/blogWrapper.module.css";
import Link from 'next/link';

const SideArticles = ({ articles }) => {
    return (
        <div className={`${Styles?.sideArticles}`}>
            {articles.map((article, index) => (
                <div  className={`${Styles?.sideArticle}`} key={article?.catgoryId + "index" + "product" + article?.title + "randomthings "+ index}>
                    <Link href={`/${article?.code}`} className={`${Styles?.sideArticleImage}`} style={{ backgroundImage: `url(${article?.image})` }}>
                       <div className={`${Styles?.overlayInner} gap_8`}>
                          <p className={`${Styles?.description} mb-0  md:text-base mt-0`}>{article?.title}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SideArticles;
