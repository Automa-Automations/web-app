// THIS FUNCTION IS USED TO SET CLASS DEFAULT STYLES TO ELEMENT, FOR EXAMPLE TEXTSTYLES.

const addClass = (selector, classToAdd) => {
  const elements = document.querySelectorAll(selector);
  if (elements) {
    elements.forEach((element) => element.classList.add(classToAdd));
  }
};

const setGlobalStyles = () => {
  // Set buttons default text size.
  addClass("button", "headlinesm");
  // Set badge text styles
  addClass(".badge", "badge-text");
}

setGlobalStyles();
