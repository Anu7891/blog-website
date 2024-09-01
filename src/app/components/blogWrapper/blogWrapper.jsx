import React from 'react';
import dynamic from 'next/dynamic';

const SideArticles = dynamic(() => import('../sideArticles/sideArticles'));
import Styles from "../blogWrapper/blogWrapper.module.css";
import { ARTICLE_IMAGE_FOUR, ARTICLE_IMAGE_ONE, ARTICLE_IMAGE_THREE, ARTICLE_IMAGE_TWO, BANNER_IMAGE_FIRST } from '../../../../lib/config';


const BlogWrapper = () => {
    const articles = [
        {
            category: 'BLOCKCHAIN',
            title: 'Cardano Chang Hard Fork: All You Need To Know About This Upgrade',
            author: 'Gopal Solanky',
            date: 'August 16, 2024',
            imageUrl: BANNER_IMAGE_FIRST, // Replace with your actual image URL
        },
        {
            category: 'ALTCOIN',
            title: 'Secure, Transparent, and User Friendly: Discover Peon Coin',
            author: 'Crypto Blogs Team',
            date: 'August 16, 2024',
            imageUrl: ARTICLE_IMAGE_ONE,
        },
        {
            category: 'BLOCKCHAIN',
            title: 'What is Canto Blockchain? Understanding Canto & Its DeFi Ecosystem',
            author: 'Gopal Solanky',
            date: 'August 15, 2024',
            imageUrl: ARTICLE_IMAGE_TWO, 
        },
        {
            category: 'DEFI',
            title: 'DAI another day! The merger of Decentralization and AI',
            author: 'Olumide Ogunjobi',
            date: 'August 12, 2024',
            imageUrl: ARTICLE_IMAGE_THREE,
        },
        {
            category: 'EXPLAINED',
            title: 'Solana ETF To Be Approved in 2024? Factors That Could Change The SOL Game',
            author: 'Gopal Solanky',
            date: 'August 9, 2024',
            imageUrl: ARTICLE_IMAGE_FOUR,
        },
    ];

    return (
     
        <div className={`${Styles?.newsGrid} pt-5 mt-5`}>
            <div className={`${Styles?.mainArticle}`}>
                <div className={`${Styles?.articleImage}`} style={{ backgroundImage: `url(${articles[0].imageUrl})` }}>
                      <div className={`${Styles?.overlayInner}`}>
                        <p className={`${Styles?.categoryLabel}`}>
                          <span>
                          {articles[0].category}
                          </span>
                          </p>
                        <p className={`${Styles?.description} w-11/12 md:text-3xl lg:text-4xl mt-0`}>{articles[0].title}</p>
                        <p className={`${Styles?.authorTitle}`}>
                            <span className='pr-1'>
                            By {articles[0].author}
                                </span>| {articles[0].date}</p>
                      </div>
                </div>
            </div>
            <SideArticles articles={articles.slice(1)}/>
          
        </div>
        
    );
};

export default BlogWrapper;
