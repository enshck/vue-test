export const getAuthStatus = (token) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!token) {
        resolve(false);
      }
      resolve(true);
    }, 500);
  });
};
