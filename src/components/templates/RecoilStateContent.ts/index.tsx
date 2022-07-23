import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'
import { testDialogOpenState } from '@/store'
import { useRecoilState } from 'recoil'

type Props = {
  className?: string
}

export default function RecoilStateContent({ className }: Props) {
  console.log('render RecoilStateContent!')
  const [open] = useRecoilState(testDialogOpenState)
  return (
    <div className={clsx(styles.root, className)}>
      {[...Array(100)].map((row, i) => (
        <span key={i}>子供です。</span>
      ))}
    </div>
  )
}
