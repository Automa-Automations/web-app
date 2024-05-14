// name is the name of the component
const addComponentStyleSheetToHead = (name) => {
  const head = document.querySelector("head");

  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", `/static/css/components/${name}.css`);

  head.appendChild(link);
};

export default addComponentStyleSheetToHead;
