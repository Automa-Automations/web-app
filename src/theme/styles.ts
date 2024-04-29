//Global styles overrides
//
const radialColor1 = "#330643"
const radialColor2 = "#000215"
const semiBold = 600
const regularFontWeight = 400

const styles = {
  colors: {
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
    radialColor1: radialColor1,
    radialColor2: radialColor2,
    radialGradient: {
      sm: `radial-gradient(50% 50% at center, ${radialColor1}, ${radialColor2})`,
      lg: `radial-gradient(80% 80% at center, ${radialColor1}, ${radialColor2})`,
    }
  },
  textStyles: {
    //Headings
    headline3xl: {
      // you can also use responsive styles
      fontSize: '60px',
      fontWeight: 'bold',
      lineHeight: '72px',
      letterSpacing: '0',
    },
    headline2xl: {
      fontSize: '48px',
      fontWeight: 'bold',
      lineHeight: '56px',
      letterSpacing: '0px',
    },
    headlinexl: {
      fontSize: '36px',
      fontWeight: 'bold',
      lineHeight: '44px',
      letterSpacing: '0px',
    },
    headlinelg: {
      fontSize: '30px',
      fontWeight: semiBold, //semibo
      lineHeight: '40px',
      letterSpacing: '0px',
    },
    headlinemd: {
      fontSize: '24px',
      fontWeight: semiBold, //Semibold
      lineHeight: '36px',
      letterSpacing: '0px',
    },
    headlinesm: {
      fontSize: '16px',
      fontWeight: semiBold, //Semibold
      lineHeight: '22px',
      letterSpacing: '0px',
    },

    //Body
    bodyxl: {
      fontSize: '20px',
      fontWeight: regularFontWeight, //Semibold
      lineHeight: '30px',
      letterSpacing: '0px',
    },
    bodylg: {
      fontSize: '18px',
      fontWeight: regularFontWeight, //Semibold
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    bodymd: {
      fontSize: '16px',
      fontWeight: regularFontWeight, //Semibold
      lineHeight: '24px',
      letterSpacing: '0px',
    },
    bodysm: {
      fontSize: '14px',
      fontWeight: regularFontWeight, //Semibold
      lineHeight: '21px',
      letterSpacing: '0px',
    },

    //Meta
    labelmd: {
      fontSize: '14px',
      fontWeight: regularFontWeight, //Semibold
      lineHeight: '14px',
      letterSpacing: '0px',
    },
    labelsm: {
      fontSize: '12px',
      fontWeight: regularFontWeight, //Semibold
      lineHeight: '12px',
      letterSpacing: '0px',
    },
  },
}

export default styles
