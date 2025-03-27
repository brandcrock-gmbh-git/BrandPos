// "use client";

// import  { useEffect, useState } from "react";
// import { getRegionFromCookies, setRegionInCookies } from "@/util/cookies";
// import { detectRegionFromAPI } from "@/util/detectRegion";

// const GetRegion = () => {
//   const [region, setRegion] = useState<string | null>(getRegionFromCookies()); // Get region from cookies

//   // This effect is responsible for fetching the region when the component mounts
//   useEffect(() => {
//     if (!region) {
//       const fetchRegion = async () => {
//         try {
//           const detectedRegion = await detectRegionFromAPI(); // Fetch region from API
//           setRegion(detectedRegion);
//           setRegionInCookies(detectedRegion); // Save region in cookies for future use
//         } catch (error) {
//           console.error("Failed to detect region:", error);
//         }
//       };
//       fetchRegion();
//     }
//   }, [region]); // Dependency array is [region] so it only runs when region is not set

//   // This effect applies the region class to the <html> element
//   useEffect(() => {
//     if (region) {
//       document.documentElement.classList.add(`region-${region.toLowerCase()}`);
//     }
//   }, [region]);

//   return null; // No UI, just handling logic
// };

// export default GetRegion;
