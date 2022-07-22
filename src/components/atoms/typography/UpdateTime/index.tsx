import styles from './style.module.scss'
import { ReactNode, useMemo } from 'react'
import clsx from 'clsx'
import { dateTextFormat } from '@/components/atoms/typography/DateText'

type Props = {
  value?: string
  prefix?: string
  children?: ReactNode
  className?: string
}

export default function UpdateTime({
  prefix,
  value,
  children,
  className,
}: Props) {
  const text = useMemo(() => {
    return dateTextFormat(value)
  }, [value])
  return (
    <time className={clsx(styles.time, className)}>
      {children ? (
        <>
          {prefix}
          {children}
        </>
      ) : (
        <>
          {prefix && `${prefix}：`}
          {text}
        </>
      )}
    </time>
  )
}
