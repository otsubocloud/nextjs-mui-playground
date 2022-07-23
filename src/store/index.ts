import { atom } from 'recoil'

export const testDialogOpenState = atom<boolean>({
  key: 'testDialogOpenState',
  default: false,
})
