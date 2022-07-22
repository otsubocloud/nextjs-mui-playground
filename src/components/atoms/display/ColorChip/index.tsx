import styles from './style.module.scss'
import clsx from 'clsx'
import { ColorData } from '@/config/types'
import { useEffect, useRef } from 'react'

type Props = {
	variant?: 'circle' | 'square' | 'rectangle'
	type?: 'fill' | 'stroke'
	color: ColorData
	onClick?: () => void
	className?: string
	disabled?: boolean
	strokeWidth?: number
}

export default function ColorChip({
	variant,
	color,
	type = 'fill',
	className,
	onClick,
	disabled,
	strokeWidth,
}: Props) {
	const ref = useRef<HTMLCanvasElement>(null)

	const height = 40
	const width = variant === 'rectangle' ? 80 : height

	const isSlash = color.a === 0 || (type === 'stroke' && !strokeWidth)

	useEffect(() => {
		const ctx = ref.current?.getContext('2d')
		if (ctx) {
			ctx.clearRect(0, 0, width, height)

			if (isSlash) {
				ctx.strokeStyle = 'red'
				ctx.lineWidth = 1
				ctx.beginPath()
				ctx.moveTo(width, 0)
				ctx.lineTo(0, height)
				ctx.closePath()
				ctx.stroke()
			} else {
				// transparent pattern
				const pW = width / 3
				const pH = height / 3
				const patternFill = `hsl(0, 0%, 20%)`

				ctx.fillStyle = patternFill
				ctx.fillRect(0, 0, pW, pH)
				ctx.fillStyle = patternFill
				ctx.fillRect(pW * 2, 0, pW, pH)
				ctx.fillStyle = patternFill
				ctx.fillRect(pW, pH, pW, pH)
				ctx.fillStyle = patternFill
				ctx.fillRect(0, pH * 2, pW, pH)
				ctx.fillStyle = patternFill
				ctx.fillRect(pW * 2, pH * 2, pW, pH)

				// fill color
				const { h, s, l, a } = color
				ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`
				ctx.fillRect(0, 0, width, height)
			}
		}
	}, [color.h, color.s, color.l, color.a])

	return (
		<div className={clsx(styles.root, className)}>
			<canvas
				ref={ref}
				className={styles.canvas}
				width={width}
				height={height}
				onClick={onClick}
			/>
			{type === 'stroke' && <span className={styles.clip} />}
			{disabled && <span className={styles.disabled} />}
		</div>
	)
}
