import common from '../common.module.scss'
import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'
import useSpacing, { SpacingProps } from '@/utils/designSystem/useSpacing'
import useColor, { ColorType } from '@/utils/designSystem/useColor'

type Props = {
  title?: string
  children?: ReactNode
  className?: string
  titleClassName?: string
  spacing?: SpacingProps
  color?: ColorType
}

export default function DialogBackground({
  children,
  spacing,
  className,
  color = 'bg-dialog',
}: Props) {
  const { style } = useSpacing(spacing)
  const backgroundColor = useColor(color)

  return (
    <div
      className={clsx(common.paddingX, styles.root, className)}
      style={{ ...style, backgroundColor }}
    >
      {children}
    </div>
  )
}
