import styles from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { MuiComponentThemeSetting } from '@/config/theme'
import vars from '@/styles/vars'
import {
  FormHelperTextClasses,
  FormHelperTextProps,
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'

type Props = {
  startAdornment?: string | ReactNode
  endAdornment?: string | ReactNode
  onChange?: (value: string) => void
} & Omit<MuiTextFieldProps, 'onChange'>

export default function TextField({
  startAdornment,
  endAdornment,
  value,
  onChange,
  className,
  type,
  ...props
}: Props) {
  const handleChange = (e: any) => {
    const value = (() => {
      if (type === 'number') {
        return Number.isInteger(e.target.value) ? e.target.value : null
      } else {
        return e.target.value || ''
      }
    })()
    onChange?.(value)
  }

  return (
    <MuiTextField
      {...props}
      type={type}
      value={value || ''}
      size="small"
      className={clsx(styles.root, className)}
      onChange={handleChange}
      {...((startAdornment || endAdornment) && {
        InputProps: {
          startAdornment: startAdornment && (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
          endAdornment: endAdornment && (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ),
        },
      })}
    />
  )
}

export const muiFormHelperTextTheme: MuiComponentThemeSetting<
  FormHelperTextProps,
  OverridesStyleRules<keyof FormHelperTextClasses>
> = {
  styleOverrides: {
    root: {
      backgroundColor: 'transparent',
      fontSize: vars['text-sm'],
      marginLeft: 0,
      marginRight: 0,
    },
  },
}
