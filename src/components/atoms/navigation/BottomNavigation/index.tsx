import styles from './style.module.scss'
import BottomNavigation, {
  BottomNavigationClasses,
  BottomNavigationProps,
} from '@mui/material/BottomNavigation'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { MuiComponentThemeSetting } from '@/config/theme'
import vars from '@/styles/vars'
import {
  BottomNavigationActionClasses,
  BottomNavigationActionProps,
} from '@mui/material'

export default BottomNavigation

export const muiBottomNavigationTheme: MuiComponentThemeSetting<
  BottomNavigationProps,
  OverridesStyleRules<keyof BottomNavigationClasses>
> = {
  styleOverrides: {
    root: {
      height: vars['bottom-size'],
    },
  },
}

export const muiBottomNavigationActionTheme: MuiComponentThemeSetting<
  BottomNavigationActionProps,
  OverridesStyleRules<keyof BottomNavigationActionClasses>
> = {
  styleOverrides: {
    root: {
      padding: `${0} ${vars['space-2']}`,
      ['.MuiSvgIcon-root']: {
        fontSize: vars['text-3xl'],
        marginBottom: vars['space-0_5'],
      },
    },
  },
}
