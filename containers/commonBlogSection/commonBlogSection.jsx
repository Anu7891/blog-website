import React from 'react';
import Styles from "../blogWrapper/blogWrapper.module.css";
import Wrapper from '../../hoc/wrapper';

const CommonBlogSection = ({title ="" ,blogDetails =[]}) => {
  return (
    <Wrapper>
          <div className=''>
            <p className={`title pb-1`}>{title}</p>
             
             <div className='blog-details-wrapper py-4 my-4 '>
                {
                   blogDetails?.length > 0 &&  blogDetails.map((blog, index) => (
                        <div className="blog-details">
                            <img src={blog?.imageUrl} alt={"blog-image"} title="blog-image" style={{ borderRadius:"12px"}} />
                            <p className='pt-3 hover:underline cursor-pointer'>{blog?.title}</p>
                        </div>



                    ))
                }
             </div>
        
         </div>

         <style>
            {
                `
                .title {
                font-size: 24px;
                font-weight: 700;
                border-bottom: 4px solid var(--black-color) !important;
                
                }

                .blog-details-wrapper {
                display:flex;
                justify-content:space-bewteen;
                gap:12px;

                
                }
                .blog-details > img {
                 cursor:pointer;
                
                }
                 .blog-details > p {
                 color: var(--theme-color) !important;
                 font-weight:500;
                 }

                 @media only screen and (max-width:767.95px) {
                    .blog-details-wrapper {
                      display:flex;
                      flex-direction:column;
                     }
                 
                 }
                    








                `
            }
         </style>
    </Wrapper>
  
  )
}

export default CommonBlogSection;