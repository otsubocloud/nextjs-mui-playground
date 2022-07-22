import styles from './style.module.scss'
import { ReactNode, useMemo } from 'react'
import clsx from 'clsx'
import useSpacing, { SpacingProps } from '@/utils/designSystem/useSpacing'
import useColor, { ColorType } from '@/utils/designSystem/useColor'

type Props = {
  color?: ColorType
  className?: string
  children?: ReactNode
  spacing?: SpacingProps
}

export default function Paper({ color, spacing, className, children }: Props) {
  const backgroundColor = useColor(color)
  const { style } = useSpacing(spacing)

  return (
    <div
      style={{ ...style, backgroundColor }}
      className={clsx(styles.root, 'AppPaper', className)}
    >
      {children}
    </div>
  )
}
