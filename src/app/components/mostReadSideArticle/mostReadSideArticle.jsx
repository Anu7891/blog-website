"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Styles from "../mostRead/mostRead.module.css";

const MostReadSideArticle = ({ articles = [] }) => {

  return (
    <div className={Styles?.sideArticles}>
      {articles.length > 0 && articles.map((item, index) => (
        <div key={index} className={`${Styles?.sideArticle}`}>
          <Link href={item?.code || ""} className={`${Styles?.sideArticleImage}`} style={{ backgroundImage: `url(${item?.image})` }}>
            <div className={`${Styles?.overlayInner} gap_8`}>
              <p className={`${Styles?.description} mb-0 md:text-base mt-0`}>{item?.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MostReadSideArticle;
