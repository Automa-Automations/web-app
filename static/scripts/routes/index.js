import { navbar, button } from "/static/components/index.js";

import {
  ScreenSizes,
  Typewriter,
  HeadContent,
  GlobalStyles,
} from "../utils/index.js";

HeadContent.addHeadContent({ route: "index", textStyles: true });
// It already uses the default global styles defined in the class, if no styles is provided
const globalStyles = new GlobalStyles() 

// Navbar functionality
navbar("#navbar");

// Import button styles
button();

const giveMoreDescriptiveTextOnDesktop = async () => {
  const heroTitle = document.getElementById("hero-title");
  const heroSubText = document.getElementById("hero-sub-text");
  const heroBottomText = document.getElementById("hero-bottom-text");
  const sizes = new ScreenSizes();

  // Default for medium and tablet width;
  let textArray = [
    "Automate Social Media",
    "Save Time and Money",
    "Grow Passively",
    "Automate Content",
    "Get Started Today",
  ];
  if (sizes.isMobile()) {
    textArray = [
      "Automate Content",
      "Leverage AI",
      "Save Time",
      "Save Money",
      "Save Headaches",
      "Get Started Today",
    ];
  } else if (sizes.isMediumWidth()) {
    heroTitle.classList = "headlinexl";
    heroSubText.classList = "bodymd";
    heroBottomText.classList = "bodysm";
  } else if (sizes.isTabletWidth()) {
    heroTitle.classList = "headline2xl";
    heroSubText.classList = "bodylg";
    heroBottomText.classList = "bodymd";
  } else {
    heroTitle.classList = "headline3xl";
    heroSubText.classList = "bodyxl";
    heroBottomText.classList = "bodymd";
    textArray = [
      "Use AI to Automate Social Media",
      "Save Time and Money",
      "Grow Passively",
      "Automate Content Creation",
      "Automate Content Scheduling",
      "Get Started Today",
    ];
    heroSubText.textContent =
      "Automa Automations will save you time, by automating the content creation and content scheduling process.";
    heroBottomText.textContent =
      "Automa Automations is still in development, meaning that all the base features aren’t integrated yet.";
  }

  // Call the typewriter function on '#hero-title'
  const typewriter = new Typewriter("#hero-title", textArray, 6, 2, 0.5, 2, 1);
  await typewriter.start()
};

giveMoreDescriptiveTextOnDesktop();
