import { Colors } from '@/styles/vars/colors'
import { UIStyles } from '@/styles/vars/ui'
import vars from '@/styles/vars'
import { useMemo } from 'react'

export type ColorType = keyof (Colors & UIStyles) | 'gradient' | 'white'

export default function useColor(color?: ColorType) {
  return useMemo(() => {
    if (!color) return
    if (color === 'gradient') {
      return `linear-gradient(135deg, ${vars['semi-primary-50']}, ${vars['primary-100']}, ${vars['semi-primary-200']})`
    }
    const source = vars as any
    return color && source[color as any] ? source[color as any] : color
  }, [color])
}
