import Link from "next/link";
import React from "react";

const CustomLink = (props) => {

    const {
        href ="",
        className= "",
        children, 
        handleClick,
        key, 
        style
    } = props;
    
    return(

        <Link href={href} className={className} onClick={handleClick} style={style} >
            {children}
        </Link>
    )

}

export default CustomLink;
