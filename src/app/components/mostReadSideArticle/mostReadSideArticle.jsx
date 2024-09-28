"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import Styles from "../mostRead/mostRead.module.css";
const CustomLink = dynamic(() => import('../../../../components/customLink/customLink'));

const MostReadSideArticle = ({ articles = [] }) => {

  return (
    <div className={Styles?.sideArticles}>
      {articles.length > 0 && articles.map((item, index) => (
        <div key={index} className={`${Styles?.sideArticle}`}>
          <CustomLink href={item?.code || ""} className={`${Styles?.sideArticleImage}`} style={{ backgroundImage: `url(${item?.image})` }}>
            <div className={`${Styles?.overlayInner} gap_8`}>
              <p className={`${Styles?.description} mb-0 md:text-base mt-0`}>{item?.title}</p>
            </div>
          </CustomLink>
        </div>
      ))}
    </div>
  );
};

export default MostReadSideArticle;
