import Link, { LinkClasses, LinkProps } from '@mui/material/Link'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { MuiComponentThemeSetting } from '@/config/theme'
import vars from '@/styles/vars/ui'

export default Link

export const muiLinkTheme: MuiComponentThemeSetting<
  LinkProps,
  OverridesStyleRules<keyof LinkClasses>
> = {
  styleOverrides: {
    root: {
      color: vars['link-text'],
      textDecorationColor: vars['link-underline'],
    },
  },
}
