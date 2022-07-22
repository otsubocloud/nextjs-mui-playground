// import styles from './style.module.scss'
import vars from '@/styles/vars'
import { ReactNode } from 'react'
import {
	MenuItem,
	SelectProps,
	Select as MuiSelect,
	SelectClasses,
} from '@mui/material'
import { MuiComponentThemeSetting } from '@/config/theme'
import { OverridesStyleRules } from '@mui/material/styles/overrides'

type Props = {
	source: SelectData[]
	onChange: (value: any) => void
} & SelectProps

export default function Select({
	source,
	onChange,
	size = 'small',
	...props
}: Props) {
	return (
		<MuiSelect size={size} onChange={e => onChange(e.target.value)} {...props}>
			{source.map((row, i) => (
				<MenuItem key={i} value={row.value}>
					{row.text}
				</MenuItem>
			))}
		</MuiSelect>
	)
}

export const muiSelectTheme: MuiComponentThemeSetting<
	SelectProps,
	OverridesStyleRules<keyof SelectClasses>
> = {
	styleOverrides: {
		select: {
			fontSize: vars['text-smLg'],
			minHeight: vars['px-16'],
		},
	},
}

export type SelectData = {
	value: any
	text: ReactNode | any
}
