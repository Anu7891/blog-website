import React from "react";
import Wrapper from "../../hoc/wrapper";
import CustomImage from "../../components/image/image";
import { BANNER_IMAGE_FIRST } from "../../lib/config";
import OverlayWrapper from "../overlayWrapper/overlayWrapper";

const BlogWrapper = () => {

return(
  <Wrapper>

    <div className="relative w-1/2 ">
    {/* --------------------------- Main Banner Section ----------------------- */}
      <div className="image-wrapper w-full my-5 py-5 ">
        <CustomImage
          src={BANNER_IMAGE_FIRST}
          alt="banner_img"
          title="banner_img"
          priority
          unoptimized
          width={670}
          height={410}
          objectFit="Cover"
        />
      </div>


     {/* ------------------------ Overlay Wrapper -------------------------------- */}
      <OverlayWrapper
       titleTag={"BlockChain"}
       description ={"Cardano Chang Hard Fork: All You Need To Know About This Upgrade"}
       blogBy={"By Gopal Solanky"}
       updatedTime={"August 16,2024"}
       className="descriptionText text-4xl py-3 w-11/12 text-white"
      />
    
    </div>
    
    <style>
        {`
         

        .image-wrapper {
        }

        .image-wrapper > img {
        border-radius:12px;
        cursor:pointer;
        }



      
         
        
        
        
        
        
        
        `}
    </style>
  </Wrapper>
)
}

export default BlogWrapper;