import React from 'react'
import Wrapper from '../../hoc/wrapper'
import { SECOND_ARTICLE_IMAGE_FOUR, SECOND_ARTICLE_IMAGE_ONE, SECOND_ARTICLE_IMAGE_THREE, SECOND_ARTICLE_IMAGE_TWO } from '../../lib/config';
import Styles from "./mostRead.module.css";
import MostReadSideArticle from '../mostReadSideArticle/mostReadSideArticle';

export const MostReadSection = () => {

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
    <div className='most-read-wrapper mt-4 pt-4'>
       
          <p className={`${Styles?.title} pb-1`}>Most Read</p>
       
            <div className={`${Styles?.mostReadArticleWrapper} py-4 my-4`}>
                
                {/* ------------------ First Article Section -------------------------- */}
                 <div className={`${Styles?.firstSection}`}>
                    <img  src={mostReadArticles?.[0]?.imageUrl} alt="article-img" />
                    <p className={`${Styles?.titleText} pt-3 pb-2`}>{mostReadArticles?.[0]?.title}</p>
                    <p className={`${Styles?.description}`}>{mostReadArticles?.[0]?.description}</p>
                 </div>

                 <MostReadSideArticle  articles={mostReadArticles.slice(1)}/> 
             
            </div>
    
        </div>
    </Wrapper>
  )
}
