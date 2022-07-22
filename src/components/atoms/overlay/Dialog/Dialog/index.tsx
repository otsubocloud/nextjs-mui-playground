import common from '../common.module.scss'
import { ReactNode, forwardRef, ReactElement, Ref } from 'react'
import { Dialog as MuiDialog, DialogProps, Grow } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import useResponsible from '@/utils/designSystem/useResponsible'

type Props = {
  open: boolean
  onClose: () => void
  children: ReactNode | string
  dialogProps?: { open?: boolean } & Omit<DialogProps, 'open'>
  pcMinWidth?: number
  pcMaxWidth?: number
}

export default function Dialog({
  open,
  onClose,
  children,
  dialogProps,
  pcMinWidth = 400,
  pcMaxWidth = 768,
}: Props) {
  const { isPhone } = useResponsible()

  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullWidth={isPhone ? true : false}
      {...dialogProps}
      PaperProps={{
        className: common.paper,
        style: {
          maxWidth: !isPhone ? pcMaxWidth : undefined,
          minWidth: !isPhone ? pcMinWidth : undefined,
        },
      }}
    >
      {children}
    </MuiDialog>
  )
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement
  },
  ref: Ref<unknown>
) {
  return <Grow ref={ref} {...props} />
})
