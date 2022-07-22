import styles from './style.module.scss'
import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'

type Props = {
  onClick: () => void
}

export default function DialogCloser({ onClick }: Props) {
  return (
    <IconButton className={styles.closer} onClick={onClick}>
      <Close />
    </IconButton>
  )
}
