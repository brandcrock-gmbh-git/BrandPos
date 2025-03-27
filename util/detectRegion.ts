// export const detectRegionFromAPI = async (): Promise<string> => {
//     try {
//       // const response = await fetch('https://ipapi.co/json/');
//       const response = await fetch(' https://get.geojs.io');
//       const data = await response.json();
//       console.log("Region detected:", data.Country);
//       return data.Country || 'defaulta';
//     } catch (error) {
//       console.error("Error detecting region:", error);
//       return 'defaultb';
//     }
//   };

// export async function detectRegionFromAPI(): Promise<string> {
//   const region = "pk";
//   return region;
// }





// export function detectRegionFromAPI(): string {
//   const region = "de";
//   return region;
// }




///////working fine code 19:02:2025 this region work is commented for region region detection
// import { cookies } from "next/headers"; // For server-side region detection
// import { getRegionFromCookies } from "./cookies"; // For client-side region detection

// // For server-side detection
// export function detectRegionFromAPI(isClient: boolean = false): string {
//   if (isClient) {
//     // If it's client-side, use js-cookie
//     const region = getRegionFromCookies();
//     return region || "default"; // Default if no region found
//   }

//   // If it's server-side, use next/headers cookies
//   const cookieStore = cookies();
//   const region = cookieStore.get("region")?.value;
//   return region || "default"; // Default if no region found
// }






