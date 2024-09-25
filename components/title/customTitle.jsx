import Link from 'next/link';
import React from 'react';

const CustomTitle = (props) => {

    const {title = "", linkText = "", className="" , href =""} = props;

    return (
        <div className={`${className} flex justify-between items-center borderClass`}>
            {title && <p className ='titleClass'>{title}</p>}
            {href && 
            <Link href={href} className='m-0 cursor-pointer'>{linkText}</Link>}
        </div>
    );
};

export default CustomTitle;