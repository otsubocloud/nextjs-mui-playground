import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = { children: ReactNode }

export default function MobileFullWidth({ children }: Props) {
  return (
    <div className={clsx(styles.root, 'AppMobileFullWidth')}>{children}</div>
  )
}
