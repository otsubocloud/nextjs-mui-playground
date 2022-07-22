import styles from './style.module.scss'
import {
  TableContainer as MuiTableContainer,
  TableContainerProps,
} from '@mui/material'
import { ReactNode } from 'react'
import clsx from 'clsx'
import useSpacing, { SpacingProps } from '@/utils/designSystem/useSpacing'

type Props = {
  variant?: 'card' | 'outlined' | 'contained' | 'normal' | 'bar'
  separator?: 'row' | 'column' | 'none'
  background?: 'none'
  rowBackground?: 'even' | 'odd' | 'none'
  className?: string
  spacing?: SpacingProps
  children: ReactNode
} & TableContainerProps

export default function TableContainer({
  className,
  variant = 'normal',
  separator,
  background,
  rowBackground = 'even',
  spacing,
  children,
  ...props
}: Props) {
  const { style } = useSpacing(spacing)
  return (
    <MuiTableContainer
      {...props}
      style={style}
      className={clsx(
        styles.root,
        {
          [styles[variant]]: !!variant,
          [styles[`separator-${separator}`]]: !!separator,
          [styles[`background-${background}`]]: !!background,
          [styles[`rowBackground-${rowBackground}`]]: !!rowBackground,
        },
        className
      )}
    >
      {children}
    </MuiTableContainer>
  )
}
