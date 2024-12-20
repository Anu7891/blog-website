import React from 'react';
import CustomImage from '../image/image'; // Adjust the import based on your file structure
import { LOGO_IMG } from '../../lib/config';
import CustomLink from '../customLink/customLink';
import { footerStaticData } from '../../assets/staticTexts/staticText';
import Separator from '../separator/separator';

const Footer = () => {
  return (
    <div className='customWidthClass footerWrapper flex flex-col p-4 md:p-0'>
      <div className={`flex flex-col md:flex-row customWidthClass items-center justify-between md:justify-between md:pt-4 pb-2`}>
        {/* ------------------------ Logo Component --------------------------------------- */}
        <CustomLink
          href={"/"}
          className="px-0 w-full md:w-4/12 mb-2 md:mb-1 flex justify-center md:justify-start logoImgClass" // Adjusted width on mobile and desktop
        >
          <CustomImage
            src={LOGO_IMG}
            alt="logo_img"
            title="logo_img"
            height={80}
            width={250}
          />
        </CustomLink>

        {/* ---------------------------------- Footer Links --------------------------------------- */}
        {footerStaticData?.length > 0 && (
          <div className="px-0 flex flex-col md:flex-row items-center justify-end w-full mb-3 md:mb-0 md:w-8/12 space-y-4 md:space-y-0 md:space-x-8">
            <div className="grid grid-cols-2 gap-4 w-full md:flex md:flex-wrap md:justify-end md:gap-8"> {/* For mobile, grid-cols-2, for desktop, flex */}
              {footerStaticData?.map((footerData, footerIndex) => (
                <div key={footerData?.id + footerIndex} className="flex">
                  <CustomLink className="footerText hover:underline" href={footerData?.link}>
                    {footerData?.title}
                  </CustomLink>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ----------------------------- Separator -------------------------------------- */}
      <Separator className={"footerBorderClass customWidthClass"} />
      <p className='customWidthClass allRightReserved pt-4 md:pt-3  pb-2 md:pb-4 text-center'>© 2024 Inc. All rights reserved.</p>
    </div>
  );
};

export default Footer;
