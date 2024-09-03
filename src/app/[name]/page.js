// src/app/[name]/page.js
import React from 'react';
import Wrapper from '../../../hoc/wrapper';
import { API_BASE_URL } from '../../../lib/config';
import CustomImage from '../../../components/image/image';
import Header from '../../../components/header/header';
import style from "../styles/blogDetails.module.css"

export default async function MainBlogDetails({ params }) {
    const { name } = params;

    // Fetch the article data based on the name
    const res = await fetch(`${API_BASE_URL}?code=${name}`, {
        next: { revalidate: 1*60*60 } // 
    });

    console.log(res,"dhjgdjhgdj")
    const article = await res.json();

    console.log(article,"articleTest")

    if (!article) {
        return <div>Article not found</div>;
    }

    const { title = " ", image =' ', description=" ", htmlDescription=" " } = article?.[0];
    


    return (
         <Wrapper>
          {/* ----------------------------- Header -------------------------------- */}
            <Header />

            <div className="md:w-full flex">

                <div className="commonwrapper" />

            {/* ------------------- Blogs Middle Section ------------------------------------ */}
                <div className=" middleWrapper">
                     <div className='px-4 md:px-0 mb-5 md:pb-6'>
                        <p className={style?.title}>{title}</p>
                        <div className={`${style?.imgWrapper} col-12 px-0 pb-5`}>
                            <CustomImage src={image} alt={title} title={title} height={500} width={500} priority unoptimized />
                        </div>
                        <p
                            dangerouslySetInnerHTML={{ __html: description || htmlDescription }}
                            style={{ fontFamily: 'Lato, sans-serif', fontSize: '16px' }}
                            className={style?.description}
                        />
                     </div>
                   
               </div>

                <div className="commonwrapper" />
            </div>

         </Wrapper>
    );
}
