import React from 'react';
import CustomImage from '../image/image'; // Adjust the import based on your file structure
import { LOGO_IMG } from '../../lib/config';
import CustomLink from '../customLink/customLink';
import { footerStaticData } from '../../assets/staticTexts/staticText';
import Wrapper from '../../hoc/wrapper';
import Separator from '../separator/separator';


const Footer = () => {

    return (
        <Wrapper>
        <div className='customWidthClass footerWrapper flex flex-col'>
          <div className={`flex customWidthClass items-center justify-between pt-4 pb-2`}>
            {/* ------------------------ Logo Component --------------------------------------- */}
            <CustomLink
              href={"/"}
              className="px-0 md:w-4/12" // col-8 for large screens, col-7 for medium screens
            >
              <CustomImage
                src={LOGO_IMG}
                alt="logo_img"
                title="logo_img"
                height={80}
                width={250}
                className="logoImg"
              />
            </CustomLink>

            {/* ---------------------------------- Footer Links --------------------------------------- */}
            {footerStaticData?.length > 0 && (
              <div className="px-0 flex items-center justify-end  md:w-8/12  space-x-8">
                {footerStaticData?.map((footerData, footerIndex) => (
                  <CustomLink className="footerText hover:underline" href={footerData?.link} key={footerData?.id + footerIndex}>
                    {footerData?.title}
                  </CustomLink>
                ))}
              </div>
            )}
          </div>

         {/* ----------------------------- Separator -------------------------------------- */}
          <Separator className={"footerBorderClass customWidthClass"} />

          <p className='customWidthClass allRightReserved pt-3 pb-4'>© 2024 Inc. All rights reserved.</p>
          </div>
            
            
        </Wrapper>


    );
};

export default Footer;
