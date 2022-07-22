import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
	children: ReactNode
	className?: string
}

export default function Xxx({ children, className }: Props) {
	return <div className={clsx(styles.root, className)}>{children}</div>
}
