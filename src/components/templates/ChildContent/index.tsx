import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
}

export default function ChildContent({ className }: Props) {
  console.log('render ChildContent!')
  return (
    <div className={clsx(styles.root, className)}>
      {[...Array(100)].map((row, i) => (
        <span key={i}>子供です。</span>
      ))}
    </div>
  )
}
