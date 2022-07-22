import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  children?: ReactNode
}

export default function Empty({
  children = 'データがありません',
  className,
}: Props) {
  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
