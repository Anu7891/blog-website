import React from 'react'

import { SECOND_ARTICLE_IMAGE_FOUR, SECOND_ARTICLE_IMAGE_ONE, SECOND_ARTICLE_IMAGE_THREE, SECOND_ARTICLE_IMAGE_TWO } from '../../../../lib/config';
import Styles from "./mostRead.module.css";
import MostReadSideArticle from '../mostReadSideArticle/mostReadSideArticle';
import Wrapper from '../../../../hoc/wrapper';
import Link from 'next/link';

export const MostReadSection = ({blogs}) => {


     const mostReadArticles = [
        {
            title:"11 Best Cryptocurrency Mining Apps in 2024",
            description:'If you are a crypto maniac, you might have heard of crypto mining. Crypto mining is the process of creating…',
            imageUrl: SECOND_ARTICLE_IMAGE_ONE,
        },
        {
        
            title: '10 AI Crypto Projects That Are Changing the Market',
            description:"Artificial intelligence (AI) is here to change the way we…",
            imageUrl: SECOND_ARTICLE_IMAGE_TWO,
         
        },
         {
        
            title: 'Top 11 Most Expensive Bored Ape Yacht Club NFTs',
            description:"In the world of NFTs, Bored Ape Yacht Club (BAYC)…",
            imageUrl: SECOND_ARTICLE_IMAGE_THREE,
         
        },
         {
        
            title: 'How To Buy Worldcoin: A Beginner’s Guide',
            description:"Among numerous crypto innovations, Worldcoin has recently garnered a lot…",
            imageUrl: SECOND_ARTICLE_IMAGE_FOUR,
         
        },
    ];
  return (
    <Wrapper>
    <div className='most-read-wrapper pt-2 md:mt-4 md:pt-4 px-3 md:px-0'>
       
          <p className={`${Styles?.title} pb-1`}>Most Read</p>
       
            <div className={`${Styles?.mostReadArticleWrapper} py-4 my-4`}>
                
                {/* ------------------ First Article Section -------------------------- */}
                 <div className={`${Styles?.firstSection}`}>
                    <Link href={blogs?.[0]?.code} >
                    <img  src={blogs?.[0]?.image} alt="article-img" />
                    <p className={`${Styles?.titleText} pt-3 pb-2`}>{blogs?.[0]?.title}</p>
                    </Link>
                    <p dangerouslySetInnerHTML={{ __html: blogs?.[0]?.description  || blogs?.[0]?.htmlDescription  }} className={`${Styles?.description}`} />
                  
                 </div>

                 <MostReadSideArticle  articles={blogs.slice(1)}/> 
             
            </div>
    
        </div>
    </Wrapper>
  )
}
