//Global styles overrides
const styles = {
  colors: {
    bg: "#121212",
    text: "#fff",
    primary: "#0000ff",
    secondary: "#000051",
    tertiary: "#373737",
    textAttention: "#33ff00",
    radialColor1: "#330643",
    radialColor2: "#000215",
    radialGradient: {
      sm: (radialColor1, radialColor2) => `radial-gradient(50% 50% at center, ${color1}, ${color2})`,
      lg: (radialColor1, radialColor2) => `radial-gradient(80% 80% at center, ${color1}, ${color2})`,
    }
  },
}
