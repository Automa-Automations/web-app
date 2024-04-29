import * as gradients from "./gradients"

const colors = {
  bg: {
    dark: "#121212",
    light: "#fff",
  },
  text: {
    dark: "#fff",
    light: "#000"
  },
  primary: {
    default: "#0000ff",
  },
  secondary: {
    dark: "#000051",
    light: "#9370DB"
  },
  tertiary: {
    dark: "#2F4F4F", // Tertiary Dark
    light: "#B0C4DE", // Tertiary Light
  },
  textAttention: {
    dark: "#33ff00",
    light: "#0000ff",
  },
  radialGradient: {
    sm: gradients.radialGradientSM,
    lg: gradients.radialGradientLG,
  },
  linearGradientText: gradients.linearGradientText,
}

export * as gradients from "./gradients"

export default colors
