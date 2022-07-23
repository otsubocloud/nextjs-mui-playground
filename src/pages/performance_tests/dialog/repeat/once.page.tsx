import TestDialog from '@/components/templates/TestDialog'
import { useState } from 'react'

export default function RepeatOncePage() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
      <TestDialog open={open} setOpen={setOpen} />
    </div>
  )
}
