import styles from './style.module.scss'
import { ReactNode, useState } from 'react'
import { Button, ButtonProps, DialogProps, DialogTitle } from '@mui/material'
import DialogActions from '@/components/atoms/overlay/Dialog/DialogActions'
import DialogContent from '@/components/atoms/overlay/Dialog/DialogContent'
import ActionButtons from '@/components/atoms/navigation/ActionButtons'
import Dialog from '@/components/atoms/overlay/Dialog/Dialog'

type Props = {
  header?: ReactNode | string
  children: ReactNode | string
  open: boolean
  setOpen: (value: boolean) => void
  footerVisible?: boolean
  cancelVisible?: boolean
  okProps?: ButtonProps | null
  cancelProps?: ButtonProps | null
  className?: string
  description?: ReactNode
} & Omit<DialogProps, 'okProps' | 'cancelProps' | 'setOpen'>

export default function ConfirmDialog(props: Props) {
  const {
    header,
    footerVisible = true,
    okProps = {},
    cancelProps = {},
    open,
    setOpen,
    children,
    description,
  } = props
  return (
    <Dialog {...props} open={open} onClose={() => setOpen(false)}>
      {header && <DialogTitle>{header}</DialogTitle>}
      <DialogContent
        spacing={{
          pt: !header ? 6 : undefined,
        }}
        className={styles.content}
      >
        {children}
      </DialogContent>
      {footerVisible && (
        <DialogActions>
          <ActionButtons description={description}>
            {cancelProps && (
              <Button
                variant="outlined"
                onClick={() => setOpen(false)}
                {...cancelProps}
              >
                {cancelProps.children || 'キャンセル'}
              </Button>
            )}
            {okProps && (
              <Button variant="contained" {...okProps}>
                {okProps.children || 'OK'}
              </Button>
            )}
          </ActionButtons>
        </DialogActions>
      )}
    </Dialog>
  )
}

export const useConfirmDialog = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [props, setProps] = useState<any>()

  const openConfirmDialog = (children: ReactNode, props: any) => {
    setProps({
      ...props,
      children,
    })
    setOpen(true)
  }
  return {
    openConfirmDialog,
    confirmDialogProps: {
      ...props,
      open,
      setOpen,
    },
  }
}
