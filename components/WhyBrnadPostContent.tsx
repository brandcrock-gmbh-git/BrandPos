import React from "react";


type WhyBrnadPostContent = {
    WhyBrnadPostContentitle?: string;
    WhyBrnadPostContentDescription?: string;
  };

const WhyBrnadPostContent = ({WhyBrnadPostContentitle,WhyBrnadPostContentDescription} :WhyBrnadPostContent)  => {
  return (
    <div className="text-center sm:text-start py-5 md:py-14 px-0 sm:px-0">
      <h3 className="text-22 lg:text-26 text-gray-100 font-bold max-w-full xl:max-w-[90%] pb-3">{WhyBrnadPostContentitle}</h3>
      <div className="text-16 lg:text-[18px] text-gray-200">
        {WhyBrnadPostContentDescription}
      </div>
    </div>
  );
};

export default WhyBrnadPostContent;
