import ScreenSizes from "./screenSizes.js";

class GlobalStyles {
  static globalStylesArray = [
    {
      selector: "button",
      sizes: {
        "default": "headlinesm",
      },
    },
    {
      selector: ".badge",
      "sizes": {
        "default": "badge-text",
      }
    },
    {
      selector: ".card.card-lg h1, .card.card-sm h1",
      "sizes": {
        "default": "bodysm",
        "medium": "bodymd",
        "tablet": "bodylg",
        "desktop": "bodyxl"
      }
    },
    {
      selector: ".card.card-lg p, card.card-sm p",
      "sizes": {
        "default": "headlinelg",
        "tablet": "headlinexl",
        "desktop": "headlinexl"
      }
    },
    {
      selector: ".overlay-card.card-lg h1, .overlay-card.card-md h1, .overlay-card.card-sm h1",
      "sizes": {
        "default": "headlinemd",
        "tablet": "headlinelg",
        "desktop": "headlinexl",
      }
    },
    {
      selector: ".overlay-card.card-lg p, .overlay-card.card-md p, .overlay-card.card-sm p",
      "sizes": {
        "default": "bodymd",
        "tablet": "bodylg",
        "desktop": "bodyxl",
      }
    },
    {
      selector: ".overlay-card.chip-card h1",
      "sizes": {
        "default": "headlinemd",
      }
    },
    {
      selector: ".overlay-card.chip-card p",
      "sizes": {
        "default": "headlinelg",
      }
    },
  ];

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
