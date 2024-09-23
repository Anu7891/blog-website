import React from 'react';
import { SUBCATEGORIES_URL } from '../../../../lib/config';
import Wrapper from '../../../../hoc/wrapper';
import Image from 'next/image';
import Styles from "./subCategories.module.css"
import Link from 'next/link';


async function SubCategoriesLists() {
    let subCategories = [];

    try{
        const response = await fetch(`${SUBCATEGORIES_URL}?_= ${new Date().getTime()}`);
        subCategories = await response.json();
    } catch (err) {
        console.error("Failed to fetch categories:", err);
    }


    return(
        <Wrapper>
            {subCategories?.data?.length > 0 && subCategories?.data?.map((category, index) => (
                <div className='mb-4 px-3 md:px-0' key={category?.categoryName + index + "categoryIndex"}>
                    <div className='flex justify-between items-center borderClass mb-6'>
                        <p className={Styles?.categoryName}>{category?.categoryName}</p>
                        <Link href={`/c/${category.categoryId}`} className='m-0 cursor-pointer'>View All</Link>
                     </div>
                    <div className="md:flex flex-wrap -mx-2">
                        {category?.blogDetails?.length > 0 && category?.blogDetails?.slice(0, 3)?.map((item, index) => (
                            <div key={item?.id + index} className="w-full md:w-1/3 px-2 mb-5 md:mb-6">
                                <div className={`${Styles?.customImage} w-full`}>
                                    <Image src={item?.image} height={250} width={250} className="w-full h-auto rounded" unoptimized />
                                </div>
                                <p className="mt-2 text-center md:mt-4 font-semibold">{item?.title}</p>
                            </div>
                        ))}
                    </div>


                 </div>
                ))}

        </Wrapper>
    )

}

export default SubCategoriesLists;