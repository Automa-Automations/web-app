
// name is the name of the component
const addComponentStyleSheetToHead = (name) => {
  const head = document.querySelector("head");

  const link = document.createElement("link")
  link.setAttribute("rel", "stylesheet")
  link.setAttribute("href", `../../css/components/navbar.css`)

  head.appendChild(link);
}

export default addComponentStyleSheetToHead;
