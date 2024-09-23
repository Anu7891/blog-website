import Image from "next/image";
import React from "react";
import { APP_NAME } from "../../lib/config";

const CustomImage = ({
  src = "",
  width = 100,
  height = 100,
  onClick,
  alt = APP_NAME,
  title = APP_NAME,
  priority = false,
  className = "",
  ...other
}) => {
  return (
      <Image
        src={src}
        width={width}
        height={height}
        title={title}
        alt={alt}
        priority={priority}
        unoptimized
        onClick={onClick}
        {...other}
      />
  );
};

export default CustomImage;
