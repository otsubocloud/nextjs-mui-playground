import styles from './style.module.scss'
import { Drawer, useTheme } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
	open: boolean
	onClose: () => void
	anchor: 'left' | 'right'
	mobileWidth?: number
	tabletWidth?: number
	desktopWidth?: number
	children: ReactNode
}

/** Extended MuiDrawer component */
export default function AsideOverlay({
	open,
	onClose,
	anchor,
	mobileWidth,
	tabletWidth,
	desktopWidth,
	children,
}: Props) {
	const { breakpoints } = useTheme()
	const initialWidth = mobileWidth || tabletWidth || desktopWidth
	return (
		<Drawer
			anchor={anchor}
			open={open}
			onClose={onClose}
			className={styles.root}
			PaperProps={{
				sx: {
					[breakpoints.down('sm')]: {
						width: `${mobileWidth || initialWidth}px`,
					},
					[breakpoints.up('sm')]: {
						width: `${tabletWidth || initialWidth}px`,
					},
					[breakpoints.up('md')]: {
						width: `${desktopWidth || initialWidth}px`,
					},
				},
			}}
		>
			<div className={styles.body}>{children}</div>
		</Drawer>
	)
}
