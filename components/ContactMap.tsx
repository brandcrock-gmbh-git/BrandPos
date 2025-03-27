"use client";
import React, { useEffect, useState } from "react";

const ContactMap = () => {
  const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    setShowMap(true);
  }, []);
  return (
    <div>
      <div className="container mx-auto px-4 pb-8 sm:pb-10 md:pb-12">
        {showMap && (
          <div>
            <iframe
              width="100%"
              height="500"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Max-Planck-Stra%C3%9Fe%205,%2085716%20Unterschlei%C3%9Fheim,%20Germany+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMap;
