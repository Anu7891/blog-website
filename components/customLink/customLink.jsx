import Link from "next/link";
import React from "react";

const CustomLink = (props) => {

    const {
        href ="",
        className= "",
        children
    } = props;
    
    return(

        <Link href={href} className={className} >
            {children}
        </Link>
    )

}

export default CustomLink;
