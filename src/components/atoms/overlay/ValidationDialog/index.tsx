import styles from './style.module.scss'
import { ReactNode, useState } from 'react'
import { Button, Dialog, DialogProps } from '@mui/material'
import { ErrorOutline } from '@mui/icons-material'
import DialogContent from '@/components/atoms/overlay/Dialog/DialogContent'
import DialogActions from '@/components/atoms/overlay/Dialog/DialogActions'
import ActionButtons from '@/components/atoms/navigation/ActionButtons'

export type Props = {
  open: boolean
  setOpen: (value: boolean) => void
  messages: Array<string | ReactNode> | undefined
  children?: ReactNode | string
} & Omit<DialogProps, 'okProps' | 'cancelProps' | 'setOpen'>

export default function ValidationDialog({
  open,
  setOpen,
  messages,
  children,
  ...props
}: Props) {
  return (
    <Dialog
      {...props}
      PaperProps={{ className: styles.paper }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogContent className={styles.content}>
        {messages && (
          <ul className={styles.content__messages}>
            {messages?.map((message, i) => (
              <li className={styles.content__messages__row} key={i}>
                <span className={styles.content__messages__row__icon}>
                  <ErrorOutline
                    className={styles.content__messages__row__icon__svg}
                  />
                </span>
                <span className={styles.content__messages__row__text}>
                  {message}
                </span>
              </li>
            ))}
          </ul>
        )}
        <>{children}</>
      </DialogContent>
      <DialogActions>
        <ActionButtons align="center">
          <Button
            className={styles.actions__button}
            onClick={() => setOpen(false)}
          >
            閉じる
          </Button>
        </ActionButtons>
      </DialogActions>
    </Dialog>
  )
}

export const useValidationDialog = (): {
  doValidate: (checkers: ValidationCheckers) => boolean
  validationDialogProps: Props
} => {
  const [open, setOpen] = useState<boolean>(false)
  const [messages, setMessages] = useState<Array<ReactNode | string>>([])

  const doValidate = (checkers: ValidationCheckers): boolean => {
    const messages: Array<ReactNode | string> = []
    for (let row of checkers) {
      const isError =
        typeof row.isError === 'function' ? row.isError() : row.isError

      if (isError) {
        messages.push(row.message)
      }
    }
    if (messages.length) {
      setOpen(true)
      setMessages(messages)
      return false
    }
    return true
  }

  return {
    doValidate,
    validationDialogProps: {
      open,
      setOpen,
      messages,
    },
  }
}

export type ValidationCheckers = {
  isError: boolean | (() => boolean)
  message: string | ReactNode
}[]
