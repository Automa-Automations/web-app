import { addComponentStyleSheetToHead } from "../scripts/utils"

// Param is the navbar element to put in the children
const navbar = (navbarSelector) => {
  const navbarElement = document.querySelector(navbarSelector);
  const navbarInnerHTML = `
    <header>
      <img src="/assets/brand/automa-icon.svg" alt="Logo" />
      <h1>Automa Automations</h1>
    </header>
    <i class="fa-solid fa-bars menu-btn" id="menu-btn"></i>
    <div id="nav-list">
      <a target="_blank" href="">About</a>
      <a target="_blank" href="">Contact</a>
      <a target="_blank" href="">Pricing</a>
    </div>
  `
  navbarElement.innerHTML = navbarInnerHTML
  addComponentStyleSheetToHead("navbar");
  const menuButton = document.getElementById("menu-btn");
  const navItems = document.getElementById("nav-list");

  let isMenuActive = false;

  let rotation = 0;
  const toggleNavList = () => {
    isMenuActive = !isMenuActive; toggleMenu(isMenuActive);
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
        menuButton.classList = "fa-solid fa-xmark";
        rotation += 360;
      } else {
        navItems.classList = "slide-from-left";
        menuButton.classList = "fa-solid fa-bars";
        rotation -= 360;
      }
    }
  }
  menuButton.addEventListener("click", toggleNavList);
}

export default navbar
