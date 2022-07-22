import common from '../common.module.scss'
import styles from './style.module.scss'
import {
  IconButton,
  DialogTitle as MuiDialogTitle,
  DialogTitleProps,
  DialogTitleClasses,
} from '@mui/material'
import { ArrowBack, Close } from '@mui/icons-material'
import { ReactNode } from 'react'
import clsx from 'clsx'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import vars from '@/styles/vars'
import { MuiComponentThemeSetting } from '@/config/theme'

type Props = {
  children: ReactNode
  onClose?: () => void
  onPrevious?: () => void
}

export default function DialogTitle({ children, onClose, onPrevious }: Props) {
  return (
    <MuiDialogTitle className={clsx(common.paddingX, styles.root)}>
      <span className={styles.title}>
        {!!onPrevious && (
          <IconButton className={styles.previous} onClick={onPrevious}>
            <ArrowBack />
          </IconButton>
        )}
        {children}
      </span>
      {onClose && (
        <IconButton size="large" className={styles.closer} onClick={onClose}>
          <Close />
        </IconButton>
      )}
    </MuiDialogTitle>
  )
}

export const muiDialogTitleTheme: MuiComponentThemeSetting<
  DialogTitleProps,
  OverridesStyleRules<keyof DialogTitleClasses>
> = {
  styleOverrides: {
    root: {
      color: vars['text-main'],
      borderBottom: `1px solid ${vars['gray-50']}`,
    },
  },
}
