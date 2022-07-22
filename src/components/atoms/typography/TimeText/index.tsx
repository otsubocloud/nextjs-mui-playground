import { ReactNode, useMemo } from 'react'

type Params = {
  nullText?: string | ReactNode
  variant?: 'jpn'
}

type Props = {
  children?: string | number
  className?: string
} & Params

export default function TimeText({ className, children, ...params }: Props) {
  const text = useMemo(() => {
    return timeTextFormat(children, params)
  }, [children])

  return <span className={className}>{text}</span>
}

export const timeTextFormat = (
  str: string | number | undefined,
  { nullText, variant }: Params | undefined = {}
) => {
  if (!str) return nullText || ''

  const value = String(str)
  const hours = value.slice(0, 2)
  const minutes = value.slice(2, 4)

  if (hours && minutes) {
    return variant === 'jpn' ? `${hours}時${minutes}分` : `${hours}:${minutes}`
  }
  return nullText || ''
}
