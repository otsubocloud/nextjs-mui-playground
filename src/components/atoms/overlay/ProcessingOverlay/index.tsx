import { useState } from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

type Props = {
  open: boolean
}

export default function ProcessingOverlay({ open }: Props) {
  return (
    <Backdrop open={open} sx={{ zIndex: 'tooltip' }}>
      <CircularProgress />
    </Backdrop>
  )
}

export const useProcessingOverlay = () => {
  const [open, setOpen] = useState<boolean>(false)
  return {
    setProcessing: setOpen,
    processingOverlayProps: { open },
  }
}
