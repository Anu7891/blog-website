import React from 'react';
import CustomLink from '../customLink/customLink';

const CustomTitle = (props) => {

    const {title = "", linkText = "", className="" , href =""} = props;

    return (
        <div className={`${className} flex justify-between items-center borderClass`}>
            {title && <p className ='titleClass'>{title}</p>}
            {href && 
            <CustomLink href={href} className='m-0 cursor-pointer'>{linkText}</CustomLink>}
        </div>
    );
};

export default CustomTitle;