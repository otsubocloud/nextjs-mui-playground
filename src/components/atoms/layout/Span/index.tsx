import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'
import { Box } from '@mui/material'
import { SxProps } from '@mui/system'

type Props = {
	children: ReactNode
	className?: string
	sx: SxProps
}

export default function Span({ children, className, sx }: Props) {
	return (
		<Box component="span" sx={sx} className={clsx(styles.root, className)}>
			{children}
		</Box>
	)
}
