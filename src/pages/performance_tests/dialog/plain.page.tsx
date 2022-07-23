import ParentContent from '@/components/templates/ParentContent'
import ChildContent from '@/components/templates/ChildContent'
import { Button } from '@mui/material'
import { useRecoilState } from 'recoil'
import { testDialogOpenState } from '@/store'
import TestDialog from '@/components/templates/TestDialog'
import { useMemo, useState } from 'react'

export default function recoilPage() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
      {useMemo(
        () => (
          <ParentContent>
            <ChildContent />
          </ParentContent>
        ),
        []
      )}
      <Button
        onClick={() => {
          setOpen(true)
          console.log('open')
        }}
      >
        Click
      </Button>
      <TestDialog open={open} setOpen={setOpen} />
    </div>
  )
}
