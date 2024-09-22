import React from 'react';
import { SUBCATEGORIES_URL } from '../../../../lib/config';
import Wrapper from '../../../../hoc/wrapper';
import Image from 'next/image';
import Styles from "./subCategories.module.css"
import Link from 'next/link';


async function SubCategoriesLists() {
    let subCategories = [];

    try{
        const response = await fetch(SUBCATEGORIES_URL);
        subCategories = await response.json();
    } catch (err) {
        console.error("Failed to fetch categories:", err);
    }


    return(
        <Wrapper>
            {subCategories?.data?.length > 0 && subCategories.data.map((category, index) => (
                <div className='mb-4 px-3 md:px-0' key={category?.categoryName + index + "categoryIndex"}>
                    <div className='flex justify-between items-center borderClass mb-6'>
                        <p className={Styles?.categoryName}>{category?.categoryName}</p>
                        <Link href={`/c/${category.categoryId}`} className='m-0 cursor-pointer' >View All</Link>
                     </div>
                   <div className={`${Styles?.subCategoriesWrapper} md:flex `}>
                    {category?.blogDetails?.length > 0 && category?.blogDetails?.map((item,index) => (
                        <div key={item?.id + index} className={`col-4 px-0 ${Styles?.subWrapper}`}>
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