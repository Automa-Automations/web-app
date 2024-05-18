const globalStylesArray = [
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
]

export default globalStylesArray;
