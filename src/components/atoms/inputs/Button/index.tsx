import styles from './style.module.scss'
import Button, { ButtonClasses, ButtonProps } from '@mui/material/Button'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { MuiComponentThemeSetting } from '@/config/theme'
import { darken, lighten } from '@mui/material'
import vars from '@/styles/vars'

export default Button

export const muiButtonTheme: MuiComponentThemeSetting<
  ButtonProps,
  OverridesStyleRules<keyof ButtonClasses>
> = {
  variants: [
    {
      props: { variant: 'outlined' },
      style: {
        backgroundColor: 'white',
        borderWidth: 2,
        boxShadow:
          `0px 3px 1px -2px ${darken(vars['gray-50'], 0.015)},` +
          `0px 2px 2px 0px ${darken(vars['gray-50'], 0.015)},` +
          `0px 1px 8px 0px ${darken(vars['gray-50'], 0.005)}`,
        // `0px 3px 1px -2px ${darken(vars['secondary-50'], 0.01)},` +
        // `0px 2px 2px 0px ${darken(vars['secondary-50'], 0.01)},` +
        // `0px 1px 8px 0px ${darken(vars['secondary-50'], 0)}`,
        boxShadowColor: 'hsla(0,0%,0%,0.01)',
        fontWeight: 700,
      },
    },
    {
      props: { variant: 'outlined', color: 'secondary' },
      style: {
        borderColor: lighten(vars['secondary-500'], 0.1),
      },
    },
    {
      props: { variant: 'outlined', color: 'primary' },
      style: {
        color: darken(vars['primary-500'], 0.1),
        borderColor: darken(vars['primary-500'], 0.1),
      },
    },
    {
      props: { variant: 'outlined', color: 'error' },
      style: {
        borderColor: lighten(vars['error-500'], 0.1),
      },
    },
    // Sizing
    {
      props: { size: 'small' },
      style: {
        fontSize: vars['text-smLg'],
      },
    },
    {
      props: { size: 'large' },
      style: {
        fontSize: vars['text-lg'],
        letterSpacing: `0.025em`,
      },
    },
  ],
  styleOverrides: {
    root: {
      fontSize: vars['text-base'],
      boxShadowColor: 'hsla(0,0%,0%,0.01)',
      borderRadius: vars['radius-s'],
    },
    outlined: {
      borderWidth: '2px',
      backgroundColor: 'white',
    },
  },
}
