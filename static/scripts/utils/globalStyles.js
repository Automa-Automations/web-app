class GlobalStyles {
  static globalStylesArray = [
    {
      "selector": "button",
      "class": "headlinesm",
    },
    {
      "selector": ".badge",
      "class": "badge-text",
    }
  ]

  constructor(globalStylesArray = GlobalStyles.globalStylesArray) {
    this.globalStylesArray = globalStylesArray;
    this.#setGlobalStyles();
  }

  set globalStyles(globalStylesArray) {
    this.globalStylesArray = globalStylesArray;
    this.#setGlobalStyles();
  }

  get globalStyles() {
    return this.globalStylesArray;
  }

  appendStyles(stylesObjectsToAppend) {
    this.globalStylesArray = [...this.globalStylesArray, ...stylesObjectsToAppend];
    this.#setGlobalStyles();
  }

  #addClass(selector, classToAdd) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => element.classList.add(classToAdd));
  }

  #setGlobalStyles() {
    for (const styleObject of this.globalStylesArray) {
      this.#addClass(styleObject["selector"], styleObject["class"]);
    }
  }
}

export default GlobalStyles;
