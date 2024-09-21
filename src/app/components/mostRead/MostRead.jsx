"use client"

import React from 'react'
// import { SECOND_ARTICLE_IMAGE_FOUR, SECOND_ARTICLE_IMAGE_ONE, SECOND_ARTICLE_IMAGE_THREE, SECOND_ARTICLE_IMAGE_TWO } from '../../../../lib/config';
import Styles from "./mostRead.module.css";
import MostReadSideArticle from '../mostReadSideArticle/mostReadSideArticle';
import Wrapper from '../../../../hoc/wrapper';;

export const MostReadSection = ({blogs}) => {


  return (
    <Wrapper>
    <div className='most-read-wrapper pt-2 md:mt-4 md:pt-4 px-3 md:px-0'>
          <p className={`${Styles?.title} pb-1`}>Most Read</p>
            <div className={`${Styles?.mostReadArticleWrapper} py-4 my-4`}>
                 <MostReadSideArticle  articles={blogs}/> 
            </div>
    
        </div>
    </Wrapper>
  )
}
