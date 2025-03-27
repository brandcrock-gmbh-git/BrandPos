export const sendContactForm = async (data: any, locale: string) => {
  return fetch(`/${locale}/api/`, { 
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
