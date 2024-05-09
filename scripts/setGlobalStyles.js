// THIS FUNCTION IS USED TO SET CLASS DEFAULT STYLES TO ELEMENT, FOR EXAMPLE TEXTSTYLES.

const setGlobalStyles = () => {
  // Set buttons default text size.
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach((button) => button.classList.add("headlinesm"));
}

setGlobalStyles();
