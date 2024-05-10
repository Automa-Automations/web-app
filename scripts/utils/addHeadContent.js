const addHeadContent = ({
  title="Automa Automations", 
  description="Automa is a project that focuses on making AI & AI automation available to the general public at a low-low cost of 10$ for the base hosted plan, or 0$ for self hosting all of our infrastructure.",
  iconPath="/assets/brand/automa-icon.svg",
  customHTML="", // Pass this in as an argument when you want to add in some custom tags into the head.
  textStyles=false,
}) => {
  console.log("TextStyles: ", textStyles);
  const headContent = `
    <title>${title}</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${description}">
    <link href="/css/theme/index.css" rel="stylesheet">
    <link rel="icon" type="x-icon/image" href="${iconPath}" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    ${textStyles ? '<link href="/css/theme/textStyles.css" rel="stylesheet">' : ""}
    ${customHTML}
  `
  const headElement = document.querySelector("head");
  headElement.innerHTML = headContent;
}

export default addHeadContent;
