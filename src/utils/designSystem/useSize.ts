import sizes, { Sizes } from '@/styles/vars/sizes'
import { useMemo } from 'react'

export type SizeType = keyof Sizes

export default function useSize(size?: SizeType) {
  return useMemo(() => {
    if (!size) return
    return sizes[size]
  }, [size])
}
