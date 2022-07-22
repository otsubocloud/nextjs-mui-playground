import styles from './style.module.scss'
import clsx from 'clsx'
import {
  TabClasses,
  TabProps,
  Tabs as MuiTabs,
  TabsClasses,
  TabsProps,
} from '@mui/material'
import { MuiComponentThemeSetting } from '@/config/theme'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import vars from '@/styles/vars'

type Props = { wrapperClassName?: string } & TabsProps
export default function Tabs({ wrapperClassName, ...tabsProps }: Props) {
  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      <MuiTabs {...tabsProps} classes={{}} />
    </div>
  )
}

export const muiTabsTheme: MuiComponentThemeSetting<
  TabsProps,
  OverridesStyleRules<keyof TabsClasses>
> = {
  styleOverrides: {
    indicator: {
      backgroundColor: vars['tabs-selected-bar'],
      height: '3px', // TODO: SBIは2px指定だが、バランス悪いので
    },
  },
}

export const muiTabTheme: MuiComponentThemeSetting<
  TabProps,
  OverridesStyleRules<keyof TabClasses>
> = {
  styleOverrides: {
    root: {
      padding: `${vars['space-2']} ${vars['space-1']}`,
      color: vars['tabs-text'],
      fontSize: vars['text-md'],
      fontWeight: 400,
      '&.Mui-selected': {
        fontWeight: 700,
        color: vars['tabs-selected-text'],
      },
    },
  },
}
