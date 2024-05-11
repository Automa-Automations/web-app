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
