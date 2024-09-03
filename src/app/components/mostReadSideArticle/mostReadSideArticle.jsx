"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Styles from "../mostRead/mostRead.module.css";

const MostReadSideArticle = ({ articles = [] }) => {
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    if (articles.length > 0) {
      setDescriptions(
        articles.map(article => article?.description || article?.htmlDescription)
      );
    }
  }, [articles]);

  return (
    <div className={Styles?.sideArticles}>
      {articles.length > 0 && articles.map((item, index) => (
        <div className={Styles?.sideArticle} key={`${item?.title}-${index}`}>
          <img src={item?.image} alt={item?.title} title={item?.title} />
          <div className={Styles?.descriptionWrapper}>
            <Link href={item?.code}>
              <p>{item?.title}</p>
            </Link>
           
              <p
                dangerouslySetInnerHTML={{ __html: descriptions[index] }}
                className={Styles?.mostReadDescription}
              />
         
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostReadSideArticle;
