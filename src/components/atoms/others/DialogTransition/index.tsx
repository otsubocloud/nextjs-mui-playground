import { ReactElement, Ref, forwardRef } from 'react'
import { Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

export default forwardRef(function DialogTransition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})
