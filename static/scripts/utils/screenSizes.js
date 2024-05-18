class ScreenSizes {
  #mobileWidth;
  #tabletWidth;
  #desktopWidth;

  constructor(mobileWidth = 450, tabletWidth = 750, desktopWidth = 1000) {
    this.windowWidth = window.innerWidth;
    this.#mobileWidth = mobileWidth;
    this.#tabletWidth = tabletWidth;
    this.#desktopWidth = desktopWidth;
  }

  isMobile() {
    return this.windowWidth <= this.#mobileWidth;
  }

  isDesktop() {
    return this.windowWidth >= this.#desktopWidth;
  }

  isMediumWidth() {
    return this.windowWidth > this.#mobileWidth && this.windowWidth < this.#tabletWidth;
  }

  isTabletWidth() {
    return this.windowWidth >= this.#tabletWidth && this.windowWidth < this.#desktopWidth;
  }

  set mobileWidth(width) {
    this.#mobileWidth = width;
  }

  get mobileWidth() {
    return this.#mobileWidth;
  }

  set tabletWidth(width) {
    this.#tabletWidth = width;
  }

  get tabletWidth() {
    return this.#tabletWidth;
  }

  set desktopWidth(width) {
    this.#desktopWidth = width;
  }

  get desktopWidth() {
    return this.#desktopWidth;
  }
}

export default ScreenSizes;
