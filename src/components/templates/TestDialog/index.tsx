import styles from './style.module.scss'
import Dialog from '@/components/atoms/overlay/Dialog/Dialog'
import DialogTitle from '@/components/atoms/overlay/Dialog/DialogTitle'
import DialogContent from '@/components/atoms/overlay/Dialog/DialogContent'
import DialogActions from '@/components/atoms/overlay/Dialog/DialogActions'
import { Button } from '@mui/material'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function TestDialog({ setOpen, open }: Props) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>ダイアログ</DialogTitle>
      <DialogContent>
        {[...Array(1000)].map((_, i) => (
          <div key={i}>
            テストです。テストです。テストです。テストです。テストです。テストです。
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button>キャンセル</Button>
        <Button>OK</Button>
      </DialogActions>
    </Dialog>
  )
}
