import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'
import { IconButton } from '@mui/material'
import { ArrowBack, Replay } from '@mui/icons-material'

type Props = {
  icon?: ReactNode
  children?: ReactNode
  className?: string
  onBack?: () => void
  onReload?: () => void
}

export default function PageHeader({
  icon,
  children,
  className,
  onBack,
  onReload,
}: Props) {
  return (
    <h1 className={clsx(styles.root, className)}>
      {onBack || onReload ? (
        <div className={styles.flex}>
          {onBack ? (
            <IconButton onClick={onBack} color="primary">
              <ArrowBack />
            </IconButton>
          ) : (
            <span />
          )}
          <span className={styles.title}>
            {icon && <span className={styles.title__icon}>{icon}</span>}
            <span className={styles.title__text}>{children}</span>
          </span>
          {onReload ? (
            <IconButton
              className={styles.reload}
              onClick={onReload}
              color="primary"
            >
              <Replay />
            </IconButton>
          ) : (
            <span />
          )}
        </div>
      ) : (
        <span className={styles.title}>
          {icon && <span className={styles.title__icon}>{icon}</span>}
          {children}
        </span>
      )}
    </h1>
  )
}
