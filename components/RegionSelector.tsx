"use client";

import {  setRegionInCookies } from "@/util/cookies"; // Import the cookie utility
import { useEffect } from "react";

const RegionSelector = () => {
  // Set default region on initial load if not already set
  useEffect(() => {
    // const currentRegion = getRegionFromCookies();
    // if (!currentRegion) {
    //   setRegionInCookies(""); // Default to Pakistan if not set
    // }
  }, []);

  const handleRegionSelect = (region: string) => {
    // Set the selected region in cookies
    setRegionInCookies(region);
    // Reload the page to apply the new region
    window.location.reload();
  };

  return (
    <div className="region-selector p-28 text-2xl flex flex-col bg-black text-white ">
      <button onClick={() => handleRegionSelect("middle-east")}>Middle East</button>
      <button onClick={() => handleRegionSelect("europe")}>Europe</button>
      <button onClick={() => handleRegionSelect("Default")}>Default Regions</button>
      {/* Add more flags here as needed */}
    </div>

    
  );
};

export default RegionSelector;



//////////// with language attribute/////////////////////
// "use client";

// import { getRegionFromCookies, setRegionInCookies } from "@/util/cookies";
// import { useEffect, useState } from "react";

// const RegionSelector = () => {
//   const [region, setRegion] = useState<string>("default");

//   useEffect(() => {
//     const storedRegion = getRegionFromCookies();
//     if (storedRegion) {
//       setRegion(storedRegion);
//       document.documentElement.lang = storedRegion; // Update <html lang>
//     } else {
//       setRegionInCookies("default");
//       setRegion("default");
//     }
//   }, []);

//   const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedRegion = event.target.value;
//     setRegion(selectedRegion);
//     setRegionInCookies(selectedRegion);
//     window.location.reload();
//   };

//   return (
//     <div className="region-selector py-4 text-xl">
//       <label htmlFor="region" className="block mb-2">
//         🌍 Select Your Region:
//       </label>
//       <select
//         id="region"
//         value={region}
//         onChange={handleRegionChange}
//         className="p-2 border rounded-md"
//       >
//         <option value="middle-east">🌍 Middle East</option>
//         <option value="europe">🇪🇺 Europe</option>
//         <option value="default">🌎 Other Regions</option>
//       </select>
//     </div>
//   );
// };

// export default RegionSelector;


//////////// End with language attribute/////////////////////




// "use client";

// import { getRegionFromCookies, setRegionInCookies } from "@/util/cookies";
// import { useEffect, useState } from "react";

// const RegionSelector = () => {
//   const [region, setRegion] = useState<string>("default");

//   useEffect(() => {
//     // Check the cookies for the region
//     const storedRegion = getRegionFromCookies();
    
//     // If there's a stored region, set it; otherwise, set the default region
//     if (storedRegion) {
//       setRegion(storedRegion);
//     } else {
//       setRegionInCookies("default"); // Default region if none set
//       setRegion("default");
//     }
//   }, []);

//   const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedRegion = event.target.value;
//     setRegion(selectedRegion);
//     setRegionInCookies(selectedRegion);
//     window.location.reload();
//   };

//   return (
//     <div className="region-selector py-4 text-xl">
      
//       <select
//         id="region"
//         value={region}
//         onChange={handleRegionChange}
//         className="p-2 border rounded-md"
//       >
//         <option value="middle-east">🌍 Middle East</option>
//         <option value="europe">🇪🇺 Europe</option>
//         <option value="default">🌎 Other Regions</option>
//       </select>
//     </div>
//   );
// };

// export default RegionSelector;

