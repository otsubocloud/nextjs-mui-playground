import styles from './style.module.scss'
import { ReactNode } from 'react'

type Props = {
	width: number
	height: number
	children: ReactNode
	className?: string
}

export default function SVGContainer({
	children,
	className,
	width,
	height,
}: Props) {
	return (
		<svg
			className={className}
			viewBox={`0 0 ${width} ${height}`}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			{children}
		</svg>
	)
}
