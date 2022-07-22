import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  icon?: ReactNode
  children: ReactNode
  className?: string
}

export default function IconTitle({ children, className, icon }: Props) {
  return (
    <h3 className={clsx(styles.header, className)}>
      {icon && <i className={styles.header__icon}>{icon}</i>}
      <span className={styles.header__title}>{children}</span>
    </h3>
  )
}
