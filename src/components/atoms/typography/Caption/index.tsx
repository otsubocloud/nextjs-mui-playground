import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'
import useSpacing, { SpacingProps } from '@/utils/designSystem/useSpacing'
import useSize, { SizeType } from '@/utils/designSystem/useSize'

type Props = {
  className?: string
  children?: ReactNode
  spacing?: SpacingProps
  fontSize?: SizeType
}

export default function Caption({
  className,
  children,
  fontSize,
  spacing,
}: Props) {
  const { style } = useSpacing(spacing)
  const size = useSize(fontSize)
  return (
    <div
      className={clsx(styles.root, className)}
      style={{ ...style, fontSize: size }}
    >
      {children}
    </div>
  )
}
