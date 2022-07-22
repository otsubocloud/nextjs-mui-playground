import styles from './style.module.scss'
import { ReactNode, useEffect, useState } from 'react'
import {
  Button,
  ButtonProps,
  DialogProps,
  Paper,
  Slide,
  SlideProps,
  Snackbar,
} from '@mui/material'
import { TaskAlt } from '@mui/icons-material'
import useResponsible from '@/utils/designSystem/useResponsible'

type Props = {
  children: ReactNode | string
  open: boolean
  setOpen: (value: boolean) => void
  buttonProps?: ButtonProps | null
  className?: string
} & Omit<DialogProps, 'buttonProps' | 'setOpen'>

const Transition = (props: SlideProps) => {
  return <Slide direction="up" {...props} />
}

export default function SucceedDialog({
  open,
  setOpen,
  children,
  buttonProps,
  ...props
}: Props) {
  const { isPhone } = useResponsible()
  useEffect(() => {
    setTimeout(() => {
      // setOpen(false)
    }, 2000)
  }, [open])

  return (
    <Snackbar
      {...props}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: isPhone ? 'center' : 'right',
      }}
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
      autoHideDuration={2500}
    >
      <Paper className={styles.content}>
        <div className={styles.content__message}>
          <TaskAlt className={styles.content__message__icon} />
          <div className={styles.content__message__text}>{children}</div>
        </div>
        {buttonProps && (
          <div className={styles.content__buttonWrapper}>
            <Button
              variant="text"
              // @ts-ignore
              color="optional"
              size="medium"
              {...buttonProps}
              onClick={(e: any) => {
                buttonProps.onClick?.(e)
                setOpen(false)
              }}
            >
              {buttonProps.children || '閉じる'}
            </Button>
          </div>
        )}
      </Paper>
    </Snackbar>
  )
}

export const useSucceedDialog = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [props, setProps] = useState<any>()

  const openSucceedDialog = (
    message: ReactNode,
    props?: { buttonProps?: ButtonProps | null }
  ) => {
    setProps({
      ...props,
      children: message,
    })
    setOpen(true)
  }
  return {
    openSucceedDialog,
    succeedDialogProps: {
      ...props,
      open,
      setOpen,
    },
  }
}
