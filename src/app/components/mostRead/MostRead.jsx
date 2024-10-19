"use client"

import React from 'react'
import dynamic from 'next/dynamic';
import Styles from "./mostRead.module.css";
import CustomTitle from '../../../../components/title/customTitle';
const MostReadSideArticle = dynamic(() => import('../mostReadSideArticle/mostReadSideArticle'));
;

export const MostReadSection = ({blogs}) => {

  return (
      <div className='most-read-wrapper pt-2 md:mt-4 md:pt-4 px-3 md:px-0'>
          {/* ------------------- Title ------------------------- */}
            <CustomTitle title={"Most Read"} />

          {/* ------------------- Most Read Side Article ------------------------- */}
          {blogs && (
          <div className={`${Styles?.mostReadArticleWrapper} py-6 md:p-0 md:my-6`}>
                <MostReadSideArticle  articles={blogs}/> 
          </div>
          )}
  
      </div>
  )
}
