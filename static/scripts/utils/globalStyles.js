import ScreenSizes from "./screenSizes.js";
import globalStylesArray from "../../data/static/globalStyles.js";

class GlobalStyles {
  static globalStylesArray = globalStylesArray;

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
    this.globalStylesArray = [
      ...this.globalStylesArray,
      ...stylesObjectsToAppend,
    ];
    this.#setGlobalStyles();
  }

  #addClass(selector, classToAdd) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => element.classList.add(classToAdd));
  }

  #setGlobalStyles() {
    const screenSizes = new ScreenSizes();

    for (const styleObject of this.globalStylesArray) {
      const selector = styleObject["selector"];
      const sizes = styleObject["sizes"];
      if (sizes["default"]) {
        this.#addClass(styleObject["selector"], sizes["default"]);
      } else {
        console.error(`Selector: ${styleObject["selector"]} not having default style.`)
      }
      console.log(styleObject);
      if (sizes["medium"] && screenSizes.isMediumWidth()) {
        this.#addClass(styleObject["selector"], sizes["medium"]);
      } else if (sizes["tablet"] && screenSizes.isTabletWidth()) {
        this.#addClass(styleObject["selector"], sizes["tablet"]);
      } else if (sizes["desktop"] && screenSizes.isDesktop()) {
        this.#addClass(styleObject["selector"], sizes["desktop"]);
      } else if (screenSizes.isMobile()) {
        console.log(`Selector "${selector}". Mobile size using default class.`)
      } else if (sizes["default"]) {
      }
      else {
        if (!sizes["default"]) {
          console.error(`Selector "${selector}" not having valid styles object format with keys of: default, medium, tablet, desktop.`)
        }
      }
    }
  }
}

export default GlobalStyles;
