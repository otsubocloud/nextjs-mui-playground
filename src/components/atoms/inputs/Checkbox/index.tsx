import styles from './style.module.scss'
import { ReactElement } from 'react'
import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps,
} from '@mui/material'
import clsx from 'clsx'

type Props = {
  children: ReactElement | string
  onChange?: (checked: boolean) => void
} & Omit<CheckboxProps, 'children' | 'onChange'>

export default function Checkbox({
  checked,
  onChange,
  className,
  ...props
}: Props) {
  return (
    <FormControlLabel
      value={true}
      control={
        <MuiCheckbox
          {...props}
          classes={{ root: styles.checkbox }}
          checked={checked}
          onChange={e => onChange?.(!!e.target.checked)}
        />
      }
      label={props.children}
      className={clsx(styles.root, className)}
    />
  )
}
