import { sleep } from "../other.js";

/**
 * Simulates a typewriter effect on a specified text element.
 *
 * @param {string} selector - The text element selector for the typewriter effect.
 * @param {string[]} textArray - An array of strings containing the text to be typed.
 * @param {number} typeSpeed - The number of characters to type per second.
 * @param {number} loopNumber - The number of times to simulate the typewriter effect.
 * @param {number} removeWordInterval - The time to pause before removing the next word (in seconds).
 * @param {number} pauseDuration - The time to pause after removing all text before typing the next string (in seconds).
 * @param {number} pauseAfterTypingDuration - The time to pause after typing the text before starting to remove the text (in seconds).
 */
const typewriter = async (
  selector,
  textArray,
  typeSpeed,
  loopNumber,
  removeWordInterval,
  pauseDuration,
  pauseAfterTypingDuration
) => {
  const textElement = document.querySelector(selector);

  if (textElement) {
    textElement.textContent = "";

    // Calculate the sleep duration between typing each character.
    const sleepBetweenCharacter = 1000 / typeSpeed;

    // Loop through the textArray 'loopNumber' times.
    for (let i = 0; i < loopNumber; i++) {
      // Loop for each text string in textArray.
      for (let j = 0; j < textArray.length; j++) {
        const text = textArray[j];

        // Type each character in the text string.
        for (const character of text) {
          textElement.textContent += character;
          await sleep(sleepBetweenCharacter);
        }

        // Pause after typing the entire text string.
        await sleep(pauseAfterTypingDuration * 1000);

        // Split the text string into an array of words.
        const wordsArray = text.split(" ");

        // If not the last loop or last text string, remove the text.
        if (i !== loopNumber - 1 || j !== textArray.length - 1) {
          // Loop to remove each word, simulating "Ctrl+Backspace".
          for (let p = 1; p <= wordsArray.length; p++) {
            // Create a new string by slicing the array to simulate removing a word.
            const newString = wordsArray.slice(0, -p).join(" ");
            textElement.textContent = newString;

            if (!textElement.textContent) {
              // Add a non-breaking space to prevent the page from resizing when text content is empty.
              textElement.innerHTML = "&nbsp;";
            } else {
              // If there's another word to remove, pause before the next removal.
              await sleep(removeWordInterval * 1000);
            }
          }
        } else {
          // On the last loop and last text string, do not remove the text, just remove the blinking cursor.
          await sleep(2000);
          textElement.style.border = "none";
        }

        // Pause before starting to type the next text string.
        await sleep(pauseDuration * 1000);
      }
    }
  }
};

export default typewriter;
