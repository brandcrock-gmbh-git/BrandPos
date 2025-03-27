// "use client";
// import React, { useEffect, useState } from "react";
// import RegionSelector from "./RegionSelector";
// import Image from 'next/image'

// const RegionModal = () => {
//   const [isRegionSet, setIsRegionSet] = useState<boolean | null>(null);

//   useEffect(() => {
//     // Check if the region cookie is set
//     const regionCookie = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("region="));

//     if (regionCookie) {
//       setIsRegionSet(true);
//     } else {
//       setIsRegionSet(false);
//     }
//   }, []);

//   return (
//     <div
//       className={`fixed overflow-hidden ${
//         isRegionSet === null ? "flex" : isRegionSet === false ? "flex" : "hidden"
//       } bg-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[1000] w-full h-screen justify-center items-center`}
//     >
//       {/* Loading screen with logo */}
//       {isRegionSet === null && (
//         <div className="flex justify-center items-center">
//           <Image alt='Logo - BrandPos' src="/Logo.svg" width={145} height={44} />
      
//         </div>
//       )}

//       {/* Show Region Selector if region is not set */}
//       {isRegionSet === false && <RegionSelector />}
//     </div>
//   );
// };

// export default RegionModal;
