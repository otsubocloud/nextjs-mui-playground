import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
}

export default function TestContent({ className }: Props) {
  console.log('render TestContent!')
  return (
    <div className={clsx(styles.root, className)}>
      {Array(1000).map((row, i) => (
        <span key={i}>テストです。</span>
      ))}
    </div>
  )
}
