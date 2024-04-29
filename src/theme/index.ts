// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

import globalStyles from './global.ts'

// Theme config - light and dark mode
import themeConfig from './themeConfig'

// Foundational style overrides
import borders from './foundations/borders'

// Component style overrides
import Button from './components/button'

const overrides = {
  config: themeConfig,
  styles: globalStyles,
  ...styles,
  ...borders,
  // Other foundational style overrides go here
  components: {
    Button,
    // Other components go here
  },
}

export default extendTheme(overrides)
