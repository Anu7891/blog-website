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
                 {/* <div className={`${Styles?.firstSection}`}>
                  <Link href={blogs?.[0]?.code} className={`${Styles?.articleImage}`} style={{ backgroundImage: `url(${blogs?.[0].image})` }} >
                    <div className={`${Styles?.overlayInner}`}>
                     <p className={`${Styles?.description} mb-0 w-11/12 md:text-3xl lg:text-4xl mt-0`}>{blogs?.[0]?.title}</p>
                    </div>
                    </Link>
                 </div> */}

                 <MostReadSideArticle  articles={blogs}/> 
             
            </div>
    
        </div>
    </Wrapper>
  )
}
