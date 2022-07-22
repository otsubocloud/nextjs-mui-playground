import styles from './style.module.scss'
import FormControlLabel, {
  FormControlLabelClasses,
  FormControlLabelProps,
} from '@mui/material/FormControlLabel'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { MuiComponentThemeSetting } from '@/config/theme'
import vars from '@/styles/vars'

export default FormControlLabel

export const muiFormControlLabelTheme: MuiComponentThemeSetting<
  FormControlLabelProps,
  OverridesStyleRules<keyof FormControlLabelClasses>
> = {
  styleOverrides: {
    labelPlacementStart: {
      marginLeft: 0,
      '.MuiFormControlLabel-label': {
        marginRight: vars['space-4'],
      },
    },
    label: {
      fontSize: vars['text-md'],
    },
  },
}
