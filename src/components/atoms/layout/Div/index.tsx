import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'
import { SxProps } from '@mui/system'
import { Box } from '@mui/material'

type Props = {
	children: ReactNode
	className?: string
	sx?: SxProps
}

export default function Div({ children, className, sx }: Props) {
	return (
		<Box component="div" sx={sx} className={clsx(styles.root, className)}>
			{children}
		</Box>
	)
}
