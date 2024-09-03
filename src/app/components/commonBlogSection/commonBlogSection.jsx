import React from 'react';
import Wrapper from '../../../../hoc/wrapper';
import styles from "./commonBlog.module.css";

const CommonBlogSection = ({ title = "", blogDetails = [] }) => {
  return (
    <Wrapper>
       <p className={`${styles?.title} pb-2 mb-4`}>{title}</p>
      <div className={styles.blogDetailsWrapper}>
        {blogDetails?.length > 0 &&
          blogDetails.map((blog, index) => (
            <div className="blog-details" key={index}>
              <img
                src={blog?.imageUrl}
                alt={"blog-image"}
                title="blog-image"
                style={{ borderRadius: "12px" }} />
              
              <p className="pt-3 hover:underline cursor-pointer">
                {blog?.title}
              </p>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default CommonBlogSection;
