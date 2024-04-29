import { defineStyleConfig } from "@chakra-ui/react"
import textStyles from "../styles/textStyles"
import colors from "../styles/colors"

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    ...textStyles.headlinesm,
    fontWeight: 'bold',
    color: colors.text.dark,
  },
  // Two sizes: sm and md
  sizes: {
    lg: {
      px: "25px", 
      py: "18px", 
      borderRadius: "10px"
    },
    md: {
      px: "20px", 
      py: "14px", 
      borderRadius: "8px"
    },
    sm: {
      px: "15px", 
      py: "11.5px", 
      borderRadius: "5px"
    },
  },
  // Two variants: outline and solid
  variants: {
    primary: {
      backgroundColor: colors.primary.default,
    },
    secondary: {
      backgroundColor: colors.secondary.dark
    },
    tertiary: {
      backgroundColor: colors.tertiary.dark
    },
    outline: {
      backgroundColor: 'transparent',
      border: `2px solid ${colors.text.dark}`,
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
})

export default Button 
