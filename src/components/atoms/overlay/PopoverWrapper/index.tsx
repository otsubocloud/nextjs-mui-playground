import styles from './style.module.scss'
import { Popover, PopoverProps } from '@mui/material'
import { MouseEvent, ReactNode, useState } from 'react'
import clsx from 'clsx'

type Props = {
	content: (handleClose: () => void) => ReactNode
	children: ReactNode
	className?: string
	popoverPosition?: 'top' | 'bottom'
}

export default function PopoverWrapper({
	children,
	content,
	className,
	popoverPosition = 'bottom',
}: Props) {
	const [open, setOpen] = useState<boolean>(false)
	const [anchorEl, setAnchorEl] = useState<HTMLElement>()

	const handleOpen = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget)
		setOpen(true)
	}

	const handleClose = () => setOpen(false)

	const positionProps: PopoverProps =
		popoverPosition === 'top'
			? {
					open,
					anchorOrigin: {
						vertical: 'top',
						horizontal: 'center',
					},
					transformOrigin: {
						vertical: 'bottom',
						horizontal: 'center',
					},
					PaperProps: {
						sx: { marginTop: -0.75 },
					},
			  }
			: {
					open,
					anchorOrigin: {
						vertical: 'bottom',
						horizontal: 'center',
					},
					transformOrigin: {
						vertical: 'top',
						horizontal: 'center',
					},
					PaperProps: {
						sx: { marginTop: 0.25 },
					},
			  }

	return (
		<>
			<span
				className={clsx(className, open && styles.isOpen)}
				onClick={handleOpen}
			>
				{children}
			</span>
			<Popover
				onClose={() => setOpen(false)}
				anchorEl={anchorEl}
				{...positionProps}
				className={styles.popover}
				classes={{
					paper: styles.paper,
				}}
			>
				{content(handleClose)}
			</Popover>
		</>
	)
}
