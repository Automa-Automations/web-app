class HeadContent {
  static addComponentStyleSheetToHead(componentName) {
    const head = document.querySelector("head");

    if (!head) {
      console.error("No head element found");
      return
    }

    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", `/static/css/components/${componentName}.css`);

    head.appendChild(link);
  };

  static addHeadContent({
    route,
    title = "Automa Automations",
    description = "Automa is a project that focuses on making AI & AI automation available to the general public at a low-low cost of 10$ for the base hosted plan, or 0$ for self hosting all of our infrastructure.",
    iconPath = "/static/assets/brand/automa-icon.svg",
    customHTML = "", // Pass this in as an argument when you want to add in some custom tags into the head.
    textStyles = false,
  }) {
    const headContent = `
      <title>${title}</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="${description}" />
      <link href="/static/css/theme/index.css" rel="stylesheet" />
      <link href="/static/css/routes/${route}.css" rel="stylesheet" />
      <link rel="icon" type="image/x-icon" href="${iconPath}" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
      ${textStyles ? '<link href="/static/css/theme/textStyles.css" rel="stylesheet">' : ""}
      ${customHTML}
    `;
    const headElement = document.querySelector("head");

    if (!headElement) {
      console.error("No head element found");
      return
    }

    headElement.innerHTML = headContent;
  };

  static removeHeadContent() {
    const head = document.querySelector("head");

    if (!head) {
      console.error("No head element found");
      return
    }

    head.innerHTML = ""
  }

  static get headContent() {
    const head = document.querySelector("head");

    if (!head) {
      console.error("No head element found");
      return
    }

    return head.innerHTML;
  }
  
  static set headContent(innerHTML) {
    const head = document.querySelector("head");

    if (!head) {
      console.error("No head element found");
      return
    }

    head.innerHTML = innerHTML;
  }

  static appendHeadContent(innerHTML) {
    const head = document.querySelector("head");

    if (!head) {
      console.error("No head element found");
      return
    }

    head.innerHTML += innerHTML;
  }
}

export default HeadContent;
