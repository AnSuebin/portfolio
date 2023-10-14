export const isMobile = () => {
  if (typeof window === 'undefined') {
    return;
  }

  return window.innerWidth <= 468 ? true : false;
};
