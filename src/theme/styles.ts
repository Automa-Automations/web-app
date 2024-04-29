//Global styles overrides
//
const radialColor1 = "#330643"
const radialColor2 = "#000215"

const styles = {
  colors: {
    bg: {
      dark: "#121212",
      light: "#fff",
    },
    text: {
      dark: "#fff",
      light: "#333333"
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
    radialColor1: radialColor1,
    radialColor2: radialColor2,
    radialGradient: {
      sm: `radial-gradient(50% 50% at center, ${radialColor1}, ${radialColor2})`,
      lg: `radial-gradient(80% 80% at center, ${radialColor1}, ${radialColor2})`,
    }
  },
}

export default styles
