import { navbar, button } from "/static/components/index.js";

import {
  isMobile,
  isMediumWidth,
  isTabletWidth,
  addHeadContent,
  setGlobalStyles,
} from "../utils/index.js";

addHeadContent({ route: "index", textStyles: true });
setGlobalStyles();


// Navbar functionality
navbar("#navbar");

// Import button styles
button();

const giveMoreDescriptiveTextOnDesktop = () => {
  const isMobileWidth = isMobile();
  const isMediumWithResponse = isMediumWidth();
  const isTabletWidthResponse = isTabletWidth();

  if (!isMobileWidth) {
    const heroTitle = document.getElementById("hero-title");
    const heroSubText = document.getElementById("hero-sub-text");
    const heroBottomText = document.getElementById("hero-bottom-text");

    heroTitle.textContent = "Use AI to Automate Social Media";
    heroSubText.textContent =
      "Automa Automations will save you time, by automating the content creation and content scheduling process.";
    heroBottomText.textContent =
      "Automa Automations is still in development, meaning that all the base features aren’t integrated yet.";

    if (isMediumWithResponse) {
      heroTitle.classList = "headlinexl";
      heroSubText.classList = "bodymd";
      heroBottomText.classList = "bodysm";
    } else if (isTabletWidthResponse) {
      heroTitle.classList = "headline2xl";
      heroSubText.classList = "bodylg";
      heroBottomText.classList = "bodymd";
    } else {
      heroTitle.classList = "headline3xl";
      heroSubText.classList = "bodyxl";
      heroBottomText.classList = "bodymd";
    }
  }
};

giveMoreDescriptiveTextOnDesktop();

// typeSpeed: characters typed per second
const typewriter = async (
  selector, // the text element selector for typewriter effect
  textArray, // an array of strings, with all the the text.
  typeSpeed, // the total characters to type per second. 
  pauseDuration, // the total time to pause after removing all the text, before it starts typing the next string in the textArray.
  removeWordInterval, // the total time it should pause before removing the next word
  pauseAfterTypingDuration, // the time to pause after typing the text, before it starts typing in the next word. 
  loopNumber, // The total amount of times it should simulate the typewriter effect.
) => {
  const textElement = document.querySelector(selector);

  if (textElement) {
    textElement.textContent = "";

    // 1000 / total characters per second, to get the sleep duration after typing each character. 
    const sleepBetweenCharacter = 1000 / typeSpeed;
    console.log(sleepBetweenCharacter);

    // Loop through the textArray "loopNumber" times.
    for (let i = 0; i < loopNumber; i++) {
      // Loop for each text string in textArray
      for (let j = 0; j < textArray.length; j++) {
        const text = textArray[j];
        // Inner-loop to type in each individual character in the text.
        for (const character of text) {
          textElement.textContent += character;
          console.log(character);
          await sleep(sleepBetweenCharacter).then(() =>
            console.log(textElement.textContent),
          );
        }
        await sleep(pauseAfterTypingDuration * 1000);

        // Turn the text string into an array of words.
        const wordsArray = text.split(" ");
        console.log(wordsArray);

        // If it is not the last loop, and the last textArray text string, it should remove the text.
        if (i !== loopNumber - 1 || j !== textArray.length - 1) {
          // Loop for removing each word, simulating "ctr+backspace"
          for (let p = 1; p <= wordsArray.length; p++) {

            // Make a new string, by slicing the array to simulate removing a word.
            const newString = wordsArray.slice(0, -p).join(" ");
            console.log(`new String: ${newString}`);
            textElement.textContent = newString;

            if (!textElement.textContent) {
              // Add an empty whitespace so that the page doesn't get smaller and bigger from there no longer being any textContent in textElement..
              textElement.innerHTML = "&nbsp;";
            } else {
              // This means that there are another word to be removed, as the textContent is valid. 
              await sleep(removeWordInterval * 1000);
            }
          }
        } 
        // If it is the last loop iteration, and it is the last text string in the text array, it should not remove the text at all. It should remove the blinking cursor.
        else {
          await sleep(2000);
          textElement.style.border = "none";
        }
        // Sleep for the pauseDuration.
        await sleep(pauseDuration * 1000);
      }
    }
  }
};

const textArray = [
  "Automate Content",
  "Leverage AI",
  "Save Time",
  "Save Money",
  "Save Headaches",
  "Get Started Today",
];

// Helper function to simulate sleep behavior, by returning a promise.
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};


// Call the typewriter function on '#hero-title'
typewriter("#hero-title", textArray, 6, 2, 0.5, 1, 2);
