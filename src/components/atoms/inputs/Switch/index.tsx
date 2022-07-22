import styles from './style.module.scss'
import {
  FormControlLabel,
  SwitchProps,
  Switch as MuiSwitch,
} from '@mui/material'
import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  children?: ReactNode
} & Omit<SwitchProps, 'checked' | 'onChange' | 'children'>

export default function Switch({
  checked,
  onChange,
  children,
  className,
}: Props) {
  return (
    <FormControlLabel
      control={
        <MuiSwitch
          checked={checked}
          onChange={e => onChange?.(e.target.checked)}
          className={undefined}
        />
      }
      label={
        <span
          className={clsx(styles.label, {
            [styles.isChecked]: checked,
          })}
        >
          {children}
        </span>
      }
      className={className}
    />
  )
}
