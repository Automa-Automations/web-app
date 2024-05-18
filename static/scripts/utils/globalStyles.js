class GlobalStyles {
  globalStylesArray = [
    {
      "selector": "button",
      "class": "headlinesm",
    },
    {
      "selector": ".badge",
      "class": "badge-text",
    }
  ]

  constructor(globalStylesArray = this.globalStylesArray) {
    this.globalStylesArray = globalStylesArray;
    this.#setGlobalStyles();
  }

  set globalStyles(globalStylesArray) {
    this.globalStylesArray = globalStylesArray;
    this.#setGlobalStyles();
  }

  appendStyles(stylesObjectsToAppend) {
    this.globalStylesArray.concat(stylesObjectsToAppend);
    this.#setGlobalStyles()
  }

  #addClass(selector, classToAdd) {
    const elements = document.querySelectorAll(selector);
    if (elements) {
      elements.forEach((element) => element.classList.add(classToAdd));
    }
  };

  #setGlobalStyles() {
    for (const styleObject of this.globalStylesArray) {
      this.#addClass(styleObject["selector"], styleObject["class"]);
    }
  };
}

export default GlobalStyles;
