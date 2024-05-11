
const mobileWidth = 450;
const tabletWidth  = 750;
const desktopWidth = 1000;

const isMobile = () => {
  return window.innerWidth <= mobileWidth;
}

const isDesktop = () => {
  return window.innerWidth >= 1000;
}

const isMediumWidth = () => {
  return window.innerWidth > mobileWidth && window.innerWidth < tabletWidth;
}


const isTabletWidth = () => {
  return window.innerWidth >= tabletWidth && window.innerWidth < desktopWidth;
}


export {
  isMobile,
  isMediumWidth, 
  isTabletWidth,
  isDesktop,
}
