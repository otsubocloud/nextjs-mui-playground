import { useMemo } from 'react'
import orderBy from 'lodash/orderBy'

type Props = {
  value: string | undefined
  breakpoints: TextResponsibleBreakpoints | undefined
}

export type TextResponsibleBreakpoints = {
  up?: number
  down?: number
  scale?: number
  className?: string
}[]

export default function useTextResponsible({ value, breakpoints }: Props) {
  const data = useMemo(() => {
    if (!value || !breakpoints) return
    const length = value.length

    const upArr = orderBy(
      breakpoints.filter(row => row.up !== undefined),
      ['up'],
      ['asc']
    )
    const downArr = orderBy(
      breakpoints.filter(row => row.down !== undefined),
      ['down'],
      ['desc']
    )

    if (upArr.length) {
      for (let row of upArr) {
        if (length >= row.up!) {
          return row
        }
      }
    }
    if (downArr.length) {
      for (let row of upArr) {
        if (length <= row.down!) {
          return row
        }
      }
    }
  }, [value?.length, breakpoints])

  return {
    responsibleFontSize: data?.scale ? `${data.scale * 100}%` : undefined,
    responsibleClassName: data?.className,
  }
}
