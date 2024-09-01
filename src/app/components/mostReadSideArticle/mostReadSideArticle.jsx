import React from 'react';
import Styles from "../mostRead/mostRead.module.css";

const MostReadSideArticle = ({articles= []}) => {
  return (
   <div className={Styles?.sideArticles}>
    {articles?.length > 0 && (
        articles.map((item, index) => (
            <div className={Styles?.sideArticle} key={item?.title + index + item?.description}>
                <img src={item?.imageUrl} />
                <div className={Styles?.descriptionWrapper}>
                <p>{item?.title}</p>
                <p>{item?.description}</p>
                </div>
            </div>
        ))
    )}
    
    
    </div>
  )
}

export default MostReadSideArticle;