import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  align?: 'left' | 'center' | 'right'
  verticalAlign?: 'bottom' | 'middle' | 'top'
  children: ReactNode
}

export default function TextWrap({ align, verticalAlign, children }: Props) {
  return (
    <span
      className={clsx(styles.root, {
        [styles[align as string]]: !!align,
        [styles[verticalAlign as string]]: !!verticalAlign,
      })}
    >
      {children}
    </span>
  )
}
