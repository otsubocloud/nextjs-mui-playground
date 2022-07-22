import styles from './style.module.scss'
import { ReactNode, Children } from 'react'
import clsx from 'clsx'
import useSpacing, { SpacingProps } from '@/utils/designSystem/useSpacing'

type Props = {
  align?: 'center' | 'right' | 'auto' | 'full'
  description?: ReactNode
  children: ReactNode
  spacing?: SpacingProps
  className?: string
}
export default function ActionButtons({
  align = 'auto',
  children,
  spacing,
  className,
  description,
}: Props) {
  const { style } = useSpacing(spacing)

  const buttonCount = Children.count(children)

  if (description) {
    return (
      <div className={styles.withDescription} style={style}>
        <div className={styles.withDescription__description}>{description}</div>
        <div
          className={clsx(
            styles.withDescription__buttonGroup,
            styles.actions,
            styles[`isButtonCount-${buttonCount}`],
            {
              [styles.isBetween]: align === 'full',
              [styles.isRight]: align === 'right',
              [styles.isCenter]: align === 'center',
              [styles.isAuto]: align === 'auto',
            }
          )}
        >
          {children}
        </div>
      </div>
    )
  }

  return (
    <div
      className={clsx(
        styles.actions,
        styles[`isButtonCount-${buttonCount}`],
        {
          [styles.isBetween]: align === 'full',
          [styles.isRight]: align === 'right',
          [styles.isCenter]: align === 'center',
          [styles.isAuto]: align === 'auto',
        },
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}
