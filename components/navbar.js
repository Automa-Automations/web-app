import { addComponentStyleSheetToHead } from "../scripts/utils"

// Param is the navbar element to put in the children
const navbar = (navbarSelector) => {

  const navbarElement = document.querySelector(navbarSelector);

  const menuButtonHTML = `
<path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>

  `
  const closeButtonHTML = `
    <path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
  `

  const navbarInnerHTML = `
    <header>
      <img src="/assets/brand/automa-icon.svg" alt="Logo" />
      <h1 class="headlinesm">Automa Automations</h1>
    </header>
    <svg id="menu-btn" class="menu-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      ${menuButtonHTML}
    </svg>
    <div id="nav-list">
      <a class="nav-link" target="_blank" href="">About</a>
      <a class="nav-link" target="_blank" href="">Contact</a>
      <a class="nav-link" target="_blank" href="">Pricing</a>
    </div>
  `
  navbarElement.innerHTML = navbarInnerHTML
  addComponentStyleSheetToHead("navbar");

  const menuButton = document.getElementById("menu-btn");
  const navItems = document.getElementById("nav-list");

  let isMenuActive = false;

  let rotation = 0;
  const toggleNavList = () => {
    console.log("Hello");
    isMenuActive = !isMenuActive; 
    toggleMenu(isMenuActive);
    menuButton.style.rotate = `${rotation}deg`;
  }

  const isMobile = () => {
    return window.innerWidth <= 512;
  }

  const toggleMenu = (isMenuActive) => {
    if (isMobile()) {
      if (isMenuActive) {
        navItems.classList = "slide-from-right";
        navItems.style.display = "flex";
        menuButton.innerHTML = closeButtonHTML;
        menuButton.setAttribute("viewBox", "0 0 385 512");
        // menuButton.classList = "fa-solid fa-xmark";
        rotation += 360;
      } else {
        navItems.classList = "slide-from-left";
        menuButton.innerHTML = menuButtonHTML;
        menuButton.setAttribute("viewBox", "0 0 448 512");
        // menuButton.classList = "fa-solid fa-bars";
        rotation -= 360;
      }
    }
  }
  console.log("before event listener")
  menuButton.addEventListener("click", toggleNavList);
  console.log("After event listener")

}

export default navbar
