import React from 'react';
import Styles from "../mostRead/mostRead.module.css";
import Link from 'next/link';

const MostReadSideArticle = ({articles= []}) => {
  return (
   <div className={Styles?.sideArticles}>
    {articles?.length > 0 && (
        articles.map((item, index) => (
            <div className={Styles?.sideArticle} key={item?.title + index + item?.description}>
                <img src={item?.image} alt={item?.title} title={item?.title} />
                <div className={Styles?.descriptionWrapper}>
                <Link href={item?.code}>
                 <p>{item?.title}</p>
                </Link>
               
                <p dangerouslySetInnerHTML={{ __html: item?.description  || item?.htmlDescription  }} className={Styles?.mostReadDescription} />
                </div>
            </div>
        ))
    )}
    
    
    </div>
  )
}

export default MostReadSideArticle;