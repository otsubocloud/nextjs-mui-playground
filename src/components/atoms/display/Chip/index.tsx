import styles from './style.module.scss'
import Chip, { ChipClasses, ChipProps } from '@mui/material/Chip'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { MuiComponentThemeSetting } from '@/config/theme'
import vars from '@/styles/vars'

export default Chip

export const muiChipTheme: MuiComponentThemeSetting<
  ChipProps,
  OverridesStyleRules<keyof ChipClasses>
> = {
  styleOverrides: {
    label: {
      // paddingTop: '1px',
      fontWeight: 500,
      fontSize: vars['text-sm'],
    },
  },
  variants: [
    {
      props: {
        // @ts-ignore
        color: 'gray',
      },
      style: {
        ['.MuiChip-label']: {
          color: 'white',
        },
      },
    },
  ],
}
