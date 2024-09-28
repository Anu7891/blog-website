"use client";
import React from 'react';
import CustomImage from '../image/image'; // Adjust the import based on your file structure
import Styles from './footer.module.css'; // Create this CSS module file for styles
import { Link } from '@mui/material';
import { LOGO_IMG } from '../../lib/config';

const Footer = () => {
    return (
        <footer className={Styles.footerWrapper}>
            <div className={Styles.footerContainer}>
                <Link
                    href="/"
                    className=""
                >
                    <p className="logoImgClass">
                        <CustomImage
                            src={LOGO_IMG}
                            alt="logo_img"
                            title="logo_img"
                            height={80}
                            width={250}
                            className="logoImg"
                        />
                    </p>
                </Link>
                <div className={Styles.textContainer}>
                    <h4>Your Footer Title</h4>
                    <p>Some descriptive text or links can go here.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
