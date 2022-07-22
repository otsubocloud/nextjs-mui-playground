import styles from './style.module.scss'
import vars from '@/styles/vars'
import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  size?:
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
  color?: string
  isPercentSize?: boolean
  weight?: 200 | 300 | 400 | 500 | 700 | 900
  lineHeight?: 'body' | 'header' | 'caption' | 'none'
}

export default function Font({
  size,
  isPercentSize,
  color,
  weight,
  children,
}: Props) {
  return (
    <span
      className={clsx(styles.root, {
        [styles[`size-${size}`]]: !!size,
        [styles[`weight-${weight}`]]: !!weight,
        [styles[`lineHeight-${weight}`]]: !!weight,
        [styles.isPercentSize]: isPercentSize,
      })}
      style={{
        // @ts-ignore
        color: vars[color],
      }}
    >
      {children}
    </span>
  )
}
