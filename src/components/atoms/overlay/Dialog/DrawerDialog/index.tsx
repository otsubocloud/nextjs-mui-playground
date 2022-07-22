import common from '../common.module.scss'
import styles from './style.module.scss'
import { ReactNode, forwardRef, ReactElement, Ref } from 'react'
import { Dialog as MuiDialog, DialogProps, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import useResponsible from '@/utils/designSystem/useResponsible'
import clsx from 'clsx'

type Props = {
  open: boolean
  onClose: () => void
  children: ReactNode | string
  dialogProps?: { open?: boolean } & Omit<DialogProps, 'open'>
  pcMinWidth?: number
  pcMaxWidth?: number
  pcWidth?: number
}

export default function DrawerDialog({
  open,
  onClose,
  children,
  dialogProps,
  pcMinWidth = 400,
  pcWidth,
  pcMaxWidth = 768,
}: Props) {
  const { isPhone } = useResponsible()

  return isPhone ? (
    <MuiDialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullScreen
      PaperProps={{
        className: clsx(common.paper, styles.paper),
      }}
      classes={{ container: styles.container }}
    >
      {children}
    </MuiDialog>
  ) : (
    <MuiDialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      {...dialogProps}
      PaperProps={{
        className: clsx(common.paper, common.paperPC),
        style: { maxWidth: pcMaxWidth, width: pcWidth, minWidth: pcMinWidth },
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
  return <Slide direction="up" ref={ref} {...props} />
})
