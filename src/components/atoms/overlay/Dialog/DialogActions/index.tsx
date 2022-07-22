import common from '../common.module.scss'
import styles from './style.module.scss'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { DialogActions as MuiDialogActions } from '@mui/material'
import useSpacing, { SpacingProps } from '@/utils/designSystem/useSpacing'

type Props = {
  children: ReactNode
  spacing?: SpacingProps
}
export default function DialogActions({ children, spacing }: Props) {
  const { style } = useSpacing(spacing)

  return (
    <MuiDialogActions
      className={clsx(common.paddingX, styles.root)}
      style={style}
    >
      {children}
    </MuiDialogActions>
  )
}
