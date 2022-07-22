import colors, { Colors } from './colors'
import sizes, { Sizes } from './sizes'
import ui, { UIStyles } from './ui'

const vars = {
  ...colors,
  ...sizes,
  ...ui,
} as Colors & Sizes & UIStyles

export default vars
