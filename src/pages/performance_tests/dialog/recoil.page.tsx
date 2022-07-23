import ParentContent from '@/components/templates/ParentContent'
import ChildContent from '@/components/templates/ChildContent'
import { Button } from '@mui/material'
import { useRecoilState } from 'recoil'
import { testDialogOpenState } from '@/store'
import TestDialog from '@/components/templates/TestDialog'
import { useMemo } from 'react'
import RecoilStateContent from '@/components/templates/RecoilStateContent.ts'

export default function RecoilPage() {
  const [open, setOpen] = useRecoilState(testDialogOpenState)
  return (
    <div>
      {useMemo(
        () => (
          <ParentContent>
            <ChildContent />
            <RecoilStateContent />
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
