import React from 'react';
import { SUBCATEGORIES_URL } from '../../../../lib/config';
import Wrapper from '../../../../hoc/wrapper';
import Image from 'next/image';
import Styles from "./subCategories.module.css"


async function SubCategoriesLists() {
    let subCategories = [];

    try{
        const response = await fetch(SUBCATEGORIES_URL);
        subCategories = await response.json();
    } catch (err) {
        console.error("Failed to fetch categories:", err);
    }

    // const subCategories = {
    //     "message": "data found",
    //     "data": [
    //         {
    //             "categoryId": "66ee445c8e40aeee53a14849",
    //             "categoryName": "Bitcoin",
    //             "blogDetails": [
    //                 {
    //                     "id": "66d196a464e7586e0bc67578",
    //                     "href": "https://www.cryptoblogs.io/secure-transparent-and-user-friendly-discover-peon-coin/",
    //                     "title": "Secure, Transparent, and User Friendly: Discover Peon Coin",
    //                     "image": "https://cdn.shoppd.net/ProductCategory/0/0/large/peon_1725272076.png"
    //                 },
    //                 {
    //                     "id": "66d196a864e7586e0bc67579",
    //                     "href": "https://www.cryptoblogs.io/canto-blockchain-its-defi-ecosystem/",
    //                     "title": "What is Canto Blockchain? Understanding Canto & Its DeFi Ecosystem",
    //                     "image": "https://www.cryptoblogs.io/wp-content/uploads/2024/08/What-is-Canto-Blockchain-Understanding-Canto-Its-DeFi-Ecosystem-420x280.jpg"
    //                 },
    //                 {
    //                     "id": "66d196ad64e7586e0bc6757a",
    //                     "href": "https://www.cryptoblogs.io/dai-another-day-the-merger-of-decentralization-and-ai/",
    //                     "title": "DAI another day! The merger of  Decentralization and AI",
    //                     "image": "https://www.cryptoblogs.io/wp-content/uploads/2024/08/DAI-another-day-The-merger-of-Decentralization-and-AI-420x280.jpg"
    //                 }
    //             ]
    //         },
    //         {
    //             "categoryId": "66ee445c8e40aeee53a14849",
    //             "categoryName": "Bitcoin",
    //             "blogDetails": [
    //                 {
    //                     "id": "66d196a464e7586e0bc67578",
    //                     "href": "https://www.cryptoblogs.io/secure-transparent-and-user-friendly-discover-peon-coin/",
    //                     "title": "Secure, Transparent, and User Friendly: Discover Peon Coin",
    //                     "image": "https://cdn.shoppd.net/ProductCategory/0/0/large/peon_1725272076.png"
    //                 },
    //                 {
    //                     "id": "66d196a864e7586e0bc67579",
    //                     "href": "https://www.cryptoblogs.io/canto-blockchain-its-defi-ecosystem/",
    //                     "title": "What is Canto Blockchain? Understanding Canto & Its DeFi Ecosystem",
    //                     "image": "https://www.cryptoblogs.io/wp-content/uploads/2024/08/What-is-Canto-Blockchain-Understanding-Canto-Its-DeFi-Ecosystem-420x280.jpg"
    //                 },
    //                 {
    //                     "id": "66d196ad64e7586e0bc6757a",
    //                     "href": "https://www.cryptoblogs.io/dai-another-day-the-merger-of-decentralization-and-ai/",
    //                     "title": "DAI another day! The merger of  Decentralization and AI",
    //                     "image": "https://www.cryptoblogs.io/wp-content/uploads/2024/08/DAI-another-day-The-merger-of-Decentralization-and-AI-420x280.jpg"
    //                 }
    //             ]
    //         }
    //     ],
    //     "status": 200
    // }


    return(
        <Wrapper>
            {subCategories?.data?.length > 0 && subCategories.data.map((category, index) => (
                 <div className='mb-4 px-3 md:px-0'>
                    <div className='flex justify-between items-center borderClass mb-6'>
                        <p className={Styles?.categoryName}>{category?.categoryName}</p>
                        <p className='m-0 cursor-pointer'>View All</p>
                     </div>
                   <div className={`${Styles?.subCategoriesWrapper} md:flex `}>
                    {category?.blogDetails?.length > 0 && category?.blogDetails?.map((item,index) => (
                        <div key={item?.id} className=' col-12 md:col-4 px-0'>
                            <div className={`${Styles?.imageClass} col-12 px-0`}  >
                            <Image src={item?.image} height={250} width={250} unoptimized /> 
                            </div>
                            <p className='mb-3 mt-2 md:mb-0 titleClass'>{item?.title}</p>
                        </div>
                    ))}
                      </div>
                 </div>
                ))}

        </Wrapper>
    )

}

export default SubCategoriesLists;