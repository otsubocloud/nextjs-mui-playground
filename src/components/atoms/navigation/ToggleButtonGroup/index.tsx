import styles from './style.module.scss'
import {
  ToggleButtonClasses,
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupClasses,
  ToggleButtonGroupProps,
  ToggleButtonProps,
} from '@mui/material'
import clsx from 'clsx'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import vars from '@/styles/vars'
import { MuiComponentThemeSetting } from '@/config/theme'
import { MEDIA } from '@/utils/designSystem/useResponsible'

type Props = {
  value?: any
  onChange?: (value?: any) => void
} & Omit<ToggleButtonProps, 'value' | 'onChange'>

export default function ToggleButtonGroup(props: Props) {
  const { value, size = 'small', onChange, className, children } = props
  return (
    // @ts-ignore
    <MuiToggleButtonGroup
      {...props}
      sx={{ backgroundColor: 'white' }}
      size={size}
      color="primary"
      exclusive
      value={value}
      onChange={(e, value) => onChange?.(value)}
      className={clsx(styles.root, className)}
    >
      {children}
    </MuiToggleButtonGroup>
  )
}

export const muiToggleButtonGroupTheme: MuiComponentThemeSetting<
  ToggleButtonGroupProps,
  OverridesStyleRules<keyof ToggleButtonGroupClasses>
> = {
  styleOverrides: {
    root: {
      padding: vars['space-1'],
      width: `100%`,
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: vars['radius-m'],
      [MEDIA.minMd]: {
        minWidth: vars['px-224'],
        maxWidth: vars['px-448'],
        width: `calc(100% - ${vars['space-36']})`,
      },
      '.MuiToggleButton-root': {
        flexGrow: 1,
      },
      '.MuiToggleButton-sizeLarge': {
        borderRadius: vars['radius-m'],
      },
    },
    grouped: {
      minWidth: vars['px-80'],
    },
  },
}

export const muiToggleButtonTheme: MuiComponentThemeSetting<
  ToggleButtonProps,
  OverridesStyleRules<keyof ToggleButtonClasses>
> = {
  styleOverrides: {
    root: {},
    selected: {},
  },
}
