"use client"

import React from 'react'
// import { SECOND_ARTICLE_IMAGE_FOUR, SECOND_ARTICLE_IMAGE_ONE, SECOND_ARTICLE_IMAGE_THREE, SECOND_ARTICLE_IMAGE_TWO } from '../../../../lib/config';
import Styles from "./mostRead.module.css";
import MostReadSideArticle from '../mostReadSideArticle/mostReadSideArticle';
import Wrapper from '../../../../hoc/wrapper';
import Link from 'next/link';

export const MostReadSection = ({blogs}) => {

  const initialDescription = blogs?.[0]?.description || blogs?.[0]?.htmlDescription ;
  const [description ,setDescription] = React.useState(null);

  React.useEffect (() => {
    setDescription(initialDescription);
  },[initialDescription])


  return (
    <Wrapper>
    <div className='most-read-wrapper pt-2 md:mt-4 md:pt-4 px-3 md:px-0'>
       
          <p className={`${Styles?.title} pb-1`}>Most Read</p>
       
            <div className={`${Styles?.mostReadArticleWrapper} py-4 my-4`}>
                
                {/* ------------------ First Article Section -------------------------- */}
                 <div className={`${Styles?.firstSection}`}>
                    <Link href={blogs?.[0]?.code} >
                    <img  src={blogs?.[0]?.image} alt="article-img" title="article-img" />
                    <p className={`${Styles?.titleText} pt-3 pb-2`}>{blogs?.[0]?.title}</p>
                    </Link>
                    <div dangerouslySetInnerHTML={{ __html:description }} className={`${Styles?.description}`} />
                  
                 </div>

                 <MostReadSideArticle  articles={blogs.slice(1)}/> 
             
            </div>
    
        </div>
    </Wrapper>
  )
}
