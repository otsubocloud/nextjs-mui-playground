import styles from './style.module.scss'
import { ReactNode } from 'react'
import BarTitle from '@/components/atoms/typography/BarTitle'
import clsx from 'clsx'
import useSpacing, { SpacingProps } from '@/utils/designSystem/useSpacing'

type Props = {
  title?: string
  children?: ReactNode
  className?: string
  titleClassName?: string
  spacing?: SpacingProps
}

export default function DialogSection({
  title,
  children,
  spacing,
  className,
  titleClassName,
}: Props) {
  const { style } = useSpacing(spacing)

  return (
    <div className={clsx(styles.root, className)} style={style}>
      {title && (
        <BarTitle
          className={clsx(styles.root__title, titleClassName)}
          size="small"
        >
          {title}
        </BarTitle>
      )}
      <div className={styles.root__content}>{children}</div>
    </div>
  )
}
