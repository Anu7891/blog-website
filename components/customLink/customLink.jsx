import Link from "next/link";
import React from "react";

const CustomLink = (props) => {

    const {
        href ="",
        className= "",
        children, 
        onClick,
        key, 
        style
    } = props;
    
    return(

        <Link href={href} className={className} onClick={onClick} style={style} {...props} >
            {children}
        </Link>
    )

}

export default CustomLink;
