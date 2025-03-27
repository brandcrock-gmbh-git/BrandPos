import React from 'react'

type SectionTitleType = {
  SectionTitle?: string;
  sectionDescription?: string;
};

  const SectionTitle = ({ SectionTitle = "", sectionDescription = "" }: SectionTitleType) => {
  return (
    <>
      <h2 className="sectionTitle text-26 md:text-32 lg:text-40 font-bold w-full lg:w-5/12 text-gray-100 mx-auto text-balance text-center">
        <div dangerouslySetInnerHTML={{ __html: SectionTitle || "" }} />
      </h2>
      <div className="sectionDescription text-16 sm:text-18 font-normal text-gray-200 lg:text-22 text-balance text-center py-4 lg:max-w-[80%] mx-auto">
                                         
        {sectionDescription}
      </div>
    </>
  );
};


export default SectionTitle