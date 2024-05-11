import { navbar, button } from "../../components";
import { 
  isMobile, 
  isMediumWidth,
  isTabletWidth,
  addHeadContent, 
  setGlobalStyles,
} from "../utils";

addHeadContent({route: "index", textStyles: true});
setGlobalStyles();

// Navbar functionality
navbar("#navbar")

// Import button styles
button()

const giveMoreDescriptiveTextOnDesktop = () => {
  const isMobileWidth  = isMobile();
  const isMediumWithResponse  = isMediumWidth();
  const isTabletWidthResponse  = isTabletWidth();

  if (!isMobileWidth) {
    const heroTitle = document.getElementById("hero-title");
    const heroSubText = document.getElementById("hero-sub-text");
    const heroBottomText = document.getElementById("hero-bottom-text");

    heroTitle.textContent = "Use AI to Automate Social Media";
    heroSubText.textContent = "Automa Automations will save you time, by automating the content creation and content scheduling process.";
    heroBottomText.textContent = "Automa Automations is still in development, meaning that all the base features aren’t integrated yet.";

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
}

giveMoreDescriptiveTextOnDesktop();

// typeSpeed: characters typed per second
const typewriter = async (selector, textArray, typeSpeed, pauseDuration, removeWordInterval) => {
  const textElement = document.querySelector(selector);

  if (textElement) {
    textElement.textContent = ""
    // 
    const sleepBetweenCharacter = 1000 / typeSpeed;
    console.log(sleepBetweenCharacter);
    for (const text of textArray) {
      for (const character of text) {
        textElement.textContent += character; 
        console.log(character);
        await sleep(sleepBetweenCharacter).then(() => console.log(textElement.textContent))
      }

      const headerText = textElement.textContent;
      for (const character of text) {
        const newString = text.substring(0, textElement.textContent.length-1);
        console.log(`new String: ${newString}`);
        textElement.textContent = newString;
      }
      textElement.innerHTML="&nbsp;";
      await sleep(pauseDuration*1000)
    }
  }
}

const textArray = ["Automate Content", "Leverage AI", "Save Time", "Save Money", "Save Headaches", "Get Started Today"]

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

typewriter("#hero-title", textArray, 6, 3, 0.5);
