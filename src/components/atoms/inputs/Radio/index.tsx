import styles from './style.module.scss'
import Radio, { RadioClasses, RadioProps } from '@mui/material/Radio'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { MuiComponentThemeSetting } from '@/config/theme'
import vars from '@/styles/vars'

export default Radio

export const muiRadioTheme: MuiComponentThemeSetting<
  RadioProps,
  OverridesStyleRules<keyof RadioClasses>
> = {
  styleOverrides: {
    root: {
      marginRight: `-${vars['space-1']}`,
    },
  },
}
