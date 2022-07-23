import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  children: ReactNode
}

export default function ParentContent({ className, children }: Props) {
  console.log('render ParentContent!')
  return <div className={clsx(styles.root, className)}>{children}</div>
}
