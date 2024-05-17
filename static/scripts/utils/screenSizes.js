class ScreenSizes {
  mobileWidth = 450;
  tabletWidth = 750;
  desktopWidth = 1000;

  constructor(mobileWidth, tabletWidth, desktopWidth) {
    this.windowWidth = window.innerWidth;
    this.mobileWidth = mobileWidth;
    this.tabletWidth = tabletWidth;
    this.desktopWidth = desktopWidth;
  };

  isMobile = () => {
    return this.windowWidth <= this.mobileWidth;
  };

  isDesktop = () => {
    return this.windowWidth >= this.desktopWidth;
  };

  isMediumWidth = () => {
    return this.windowWidth > this.mobileWidth && this.windowWidth < this.tabletWidth;
  };

  isTabletWidth = () => {
    return this.windowWidth >= this.tabletWidth && this.windowWidth < this.desktopWidth;
  };
}

export default ScreenSizes;
