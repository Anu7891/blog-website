import React from "react";
import Wrapper from "../../hoc/wrapper";
import { THEME_TAG_COLOR, WHITE_COLOR } from "../../lib/config";
import Styles from "./overlapWrapper.module.css";


const OverlayWrapper =(props) => {

  const {titleTag = "" ,description,blogBy,updatedTime,className} = props;

return(
    <Wrapper>
      <div className={Styles?.overlayWrapper}>
      <div className={Styles?.overlayInner}>
           <div>
           <p className={` ${Styles?.titleTag } uppercase text-xs`}>
            {titleTag}
           </p>
            <p className={className || `${Styles?.description}`}>{description}</p>
            <p className={`${Styles?.blogBy}`}>
                <span>{blogBy} | {updatedTime}</span>
            </p>
           </div>
      </div>
      </div>
   


     <style>
        {
            `
             .overlay-wrapper {
             position:absolute;
             bottom:20px;
            
            }
           
             .overlay-inner {
              background: linear-gradient(to top, var(--dark-accent) 0, var(--dark-accent-90) 50%, var(--dark-accent-0) 100%);
              border-radius:20px;
             }

              .overlay-inner > div { 
              margin:25px 25px 0 !important;
            //   padding-bottom:20px;
             }

             .titleTag {
                position: relative;
                display: inline-block;
                padding: 8px 14px;
                border-radius: 8px;
                width: fit-content;
                z-index: 1;
                color:${WHITE_COLOR} !important;
             }

                .titleTag::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: ${THEME_TAG_COLOR} !important;
                    transform: skewX(-25deg);
                    border-radius: 8px;
                    z-index: -1;
                }

            .description {
              font-size:18px;
              color:${WHITE_COLOR} !important;
            }
            .blog-by {
            font-size:11px;
             color:${WHITE_COLOR} !important;
            }
            
            
            
            
            
            `
        }
     </style>
    </Wrapper>
   
    )


}


export default OverlayWrapper;