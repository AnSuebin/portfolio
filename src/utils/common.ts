export const isMobile = () => {
  if (typeof window === 'undefined') {
    return;
  }

  return window.innerWidth <= 1024 ? true : false;
};
