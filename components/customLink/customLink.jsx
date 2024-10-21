import Link from "next/link";
import React from "react";

const CustomLink = (props) => {

    const {
        href ="",
        className= "",
        children, 
        handleclick,
        key, 
        style
    } = props;
    
    return(

        <Link href={href} className={className} onClick={handleclick} style={style} {...props} >
            {children}
        </Link>
    )

}

export default CustomLink;
