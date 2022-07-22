import styles from './style.module.scss'
import { Alert, Snackbar } from '@mui/material'
import React, { ReactNode, useState } from 'react'

type Props = {
	open: boolean
	setOpen: (value: boolean) => void
	children: ReactNode | undefined
}

export default function Toast({ open, setOpen, children }: Props) {
	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={open}
			onClose={() => setOpen(false)}
			autoHideDuration={3000}
		>
			<Alert severity="success" onClose={() => setOpen(false)} variant="filled">
				{children}
			</Alert>
		</Snackbar>
	)
}

export const useToast = () => {
	const [open, setOpen] = useState<boolean>(false)
	const [children, setChildren] = useState<ReactNode>()

	const openToast = (message: ReactNode) => {
		setChildren(message)
		setOpen(true)
	}
	return {
		openToast,
		toastProps: {
			open,
			setOpen,
			children,
		},
	}
}
