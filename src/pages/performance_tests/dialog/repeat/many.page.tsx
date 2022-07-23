import TestDialog from '@/components/templates/TestDialog'
import { useState } from 'react'

export default function RepeatManyPage() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
      {[...Array(1000)].map((row, i) => (
        <TestDialog key={i} open={open} setOpen={setOpen} />
      ))}
    </div>
  )
}
