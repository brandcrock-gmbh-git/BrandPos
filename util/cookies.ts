// import cookie from 'js-cookie';

// export const getRegionFromCookies = () => {
//   return cookie.get("region") 
// }

// export const setRegionInCookies = (region) => {
//     cookie.set('region', region, { expires: 1 });  
// }





import cookie from 'js-cookie';

// Get the region from cookies
export const getRegionFromCookies = (): string | undefined => {
  return cookie.get("region");
};

// Set the region in cookies
export const setRegionInCookies = (region: string): void => {
  cookie.set('region', region, { expires: 1, path: '/' }); // Expires in 1 day
};







