import Image from "next/image";
import React from "react";
import { APP_NAME } from "../../lib/config";

const CustomImage =(src="",width="", height="", onClick, alt = APP_NAME, title= APP_NAME, priority=false, className = "", defaultPlaceholder, ...other ) => {
    return (
       <Image
         src={src}
         width={width} 
         height={height} 
         title={title}
         className={className} 
         priority={priority}
         unoptimized
         {...other}
       />
    )



}

export default CustomImage;