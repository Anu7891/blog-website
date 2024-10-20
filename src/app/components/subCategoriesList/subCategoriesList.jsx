import React from 'react';
import dynamic from 'next/dynamic';
import Wrapper from '../../../../hoc/wrapper';
import { SUBCATEGORIES_URL } from '../../../../lib/config';
import Styles from "./subCategories.module.css"
const CustomLink = dynamic(() => import('../../../../components/customLink/customLink'));
const CustomImage = dynamic(() => import('../../../../components/image/image'));
const CustomTitle = dynamic(() => import('../../../../components/title/customTitle'));


async function SubCategoriesLists() {
    
    let subCategories = [];

    try {
        const response = await fetch(`${SUBCATEGORIES_URL}`, {
            cache: 'no-store', // Always fetch fresh data
        });
        subCategories = await response?.json();
    } catch (err) {
        console.error("Failed to fetch categories:", err);
    }

  


    return(
        <Wrapper>
            {subCategories?.data?.length > 0 && subCategories?.data?.map((category, index) => (
                <div className='mb-4 md:mb-6 px-3 md:px-0' key={category?.categoryName + index + "categoryIndex"}>
                    <CustomTitle title={category?.categoryName} linkText={"View All"} href={`/c/${category.categoryId}`} className="mb-6" />
                    <div className="md:flex flex-wrap -mx-2">
                        {category?.blogDetails?.length > 0 && category?.blogDetails?.slice(0, 3)?.map((item, index) => (
                            <div key={item?.id + index + item?.title + "categoryDetails"} className="w-full md:w-1/3 px-2 mb-5 md:mb-6">
                                <CustomLink href={`/${item.code}`}>
                                    {item.image && (
                                        <div className={`${Styles?.customImage} w-full`}>
                                            <CustomImage src={item.image} alt={item.title} title={item.title} height={250} width={250} priority={[0, 1, 2]?.includes(index)} className="w-full h-auto rounded" unoptimized key={item?.id + index + item?.title + "categoryDetails"} />
                                        </div>
                                    )}
                                    {item.title && (
                                        <p className="mt-2 text-center md:mt-4 font-semibold">{item.title}</p>
                                    )}
                                </CustomLink>
                            </div>
                        ))}
                    </div>


                 </div>
                ))}

        </Wrapper>
    )

}

export default SubCategoriesLists;