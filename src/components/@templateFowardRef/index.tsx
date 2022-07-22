import styles from './style.module.scss'
import { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
	children: ReactNode
	className?: string
}
const Xxx = forwardRef((props: Props, ref) => {
	const { children, className } = props

	return <div className={clsx(styles.root, className)}>{children}</div>
})

export default Xxx
