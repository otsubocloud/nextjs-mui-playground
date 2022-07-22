import { createTheme } from '@mui/material'
import vars from '@/styles/vars'

/** 各種コンポーネントテーマのインポート */
import { muiSelectTheme } from '@/components/atoms/inputs/Select'
import { muiFormHelperTextTheme } from '@/components/atoms/inputs/TextField'
import {
  muiToggleButtonGroupTheme,
  muiToggleButtonTheme,
} from '@/components/atoms/navigation/ToggleButtonGroup'
import { muiTabsTheme, muiTabTheme } from '@/components/atoms/navigation/Tabs'
import { muiLinkTheme } from '@/components/atoms/navigation/Link'
import { muiRadioTheme } from '@/components/atoms/inputs/Radio'
import { muiDialogTitleTheme } from '@/components/atoms/overlay/Dialog/DialogTitle'
import {
  muiBottomNavigationActionTheme,
  muiBottomNavigationTheme,
} from '@/components/atoms/navigation/BottomNavigation'
import { muiFormControlLabelTheme } from '@/components/atoms/inputs/FormControlLabel'
import { muiBackdropTheme } from '@/components/atoms/overlay/Backdrop'
import { muiButtonTheme } from '@/components/atoms/inputs/Button'
import { muiChipTheme } from '@/components/atoms/display/Chip'

export default createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Noto Sans JP"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    mode: 'dark',
    // @ts-ignore
    gray: {
      light: vars['gray-800'],
      main: vars['gray-500'],
      dark: vars['gray-800'],
      contrastText: 'hsl(0,0%,100%)',
    },
  },
  breakpoints: {
    values: {
      xs: parseInt(vars['breakpoint-xs']),
      sm: parseInt(vars['breakpoint-sm']),
      md: parseInt(vars['breakpoint-md']),
      lg: parseInt(vars['breakpoint-lg']),
      xl: parseInt(vars['breakpoint-xl']),
    },
  },
  components: {
    MuiButton: muiButtonTheme,
    MuiToggleButtonGroup: muiToggleButtonGroupTheme,
    MuiToggleButton: muiToggleButtonTheme,
    MuiChip: muiChipTheme,
    MuiTabs: muiTabsTheme,
    MuiTab: muiTabTheme,
    MuiSelect: muiSelectTheme,
    MuiLink: muiLinkTheme,
    MuiRadio: muiRadioTheme,
    MuiDialogTitle: muiDialogTitleTheme,
    MuiBottomNavigation: muiBottomNavigationTheme,
    MuiBottomNavigationAction: muiBottomNavigationActionTheme,
    MuiFormControlLabel: muiFormControlLabelTheme,
    MuiBackdrop: muiBackdropTheme,
    MuiFormHelperText: muiFormHelperTextTheme,
  },
})

export type MuiComponentThemeSetting<T, S> =
  | {
      defaultProps?: Partial<T> | undefined
      styleOverrides?: Partial<S> | undefined
      variants?: { props: any; style: any }[] | undefined
    }
  | undefined
