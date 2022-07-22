import styles from './style.module.scss'
import vars from '@/styles/vars'
import { ReactNode, useMemo } from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  children?: ReactNode
  color?: 'secondary' | string
  textColor?: string
  size?: 'small'
  variant?: 'none-bar'
}

export default function BarTitle({
  className,
  children,
  color,
  textColor: _textColor,
  size,
  variant,
}: Props) {
  const [barColor, textColor] = useMemo(() => {
    const barColor = color === 'secondary' ? vars['secondary-500'] : color
    const textColor = _textColor
      ? _textColor
      : color === 'secondary'
      ? vars['gray-600']
      : undefined
    return [barColor, textColor]
  }, [color, _textColor])

  return (
    <h3
      className={clsx(
        styles.header,
        { [styles.isSmall]: size === 'small' },
        className
      )}
    >
      <span style={{ color: textColor }} className={styles.header__title}>
        {variant !== 'none-bar' && (
          <i
            style={{ backgroundColor: barColor }}
            className={styles.header__bar}
          />
        )}
        {children}
      </span>
    </h3>
  )
}
