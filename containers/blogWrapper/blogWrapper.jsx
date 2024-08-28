import React from "react";
import Wrapper from "../../hoc/wrapper";
import CustomImage from "../../components/image/image";
import { BANNER_IMAGE_FIRST } from "../../lib/config";

const BlogWrapper = () => {

return(
  <Wrapper>
    <div className="image-wrapper w-full my-5 py-5">
      
      <CustomImage
        src={BANNER_IMAGE_FIRST}
        alt="banner_img"
        title="banner_img"
        priority
        unoptimized
        width={680}
        height={650}
        objectFit="Cover"
      />


    </div>
    
    <style>
        {`
         
        
        
        
        
        
        
        `}
    </style>
  </Wrapper>
)
}

export default BlogWrapper;