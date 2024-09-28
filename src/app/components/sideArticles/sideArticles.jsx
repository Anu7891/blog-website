import React from 'react';
import dynamic from 'next/dynamic';
import Styles from "../blogWrapper/blogWrapper.module.css";
const CustomLink = dynamic(() => import('../../../../components/customLink/customLink'));

const SideArticles = ({ articles }) => {
    return (
        <div className={`${Styles?.sideArticles}`}>
            {articles.map((article, index) => (
                <div  className={`${Styles?.sideArticle}`} key={article?.catgoryId + "index" + "product" + article?.title + "randomthings "+ index}>
                    <CustomLink href={`/${article?.code}`} className={`${Styles?.sideArticleImage}`} style={{ backgroundImage: `url(${article?.image})` }}>
                       <div className={`${Styles?.overlayInner} gap_8`}>
                          <p className={`${Styles?.description} mb-0  md:text-base mt-0`}>{article?.title}</p>
                        </div>
                    </CustomLink>
                </div>
            ))}
        </div>
    );
};

export default SideArticles;
