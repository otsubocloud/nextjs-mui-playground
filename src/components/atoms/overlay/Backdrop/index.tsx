import styles from './style.module.scss'
import Backdrop, {
  BackdropClasses,
  BackdropProps,
} from '@mui/material/Backdrop'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { MuiComponentThemeSetting } from '@/config/theme'

export default Backdrop

export const muiBackdropTheme: MuiComponentThemeSetting<
  BackdropProps,
  OverridesStyleRules<keyof BackdropClasses>
> = {
  styleOverrides: {
    root: {
      backgroundColor: 'hsla(0,0%,0%,0.1)',
      ['.MuiCircularProgress-root']: {
        color: 'white',
      },
    },
  },
}
