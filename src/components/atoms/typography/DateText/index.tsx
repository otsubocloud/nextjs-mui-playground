import { ReactNode, useMemo } from 'react'
import splitDate, { DateParseFormat } from '@/utils/date/splitDate'
import { DateFormat } from '@/utils/date/formatDate'
import dateFnsFormat from 'date-fns/format'
import useSize, { SizeType } from '@/utils/designSystem/useSize'

type Params = {
  isNow?: boolean
  format?: DateFormat
  parseFormat?: DateParseFormat
  nullText?: string | ReactNode
  prefix?: string
  suffix?: string
  fontSize?: SizeType
}

type Props = {
  children?: string | number
  className?: string
} & Params

export default function DateText({
  className,
  fontSize: size,
  children,
  ...params
}: Props) {
  const text = useMemo(() => {
    return dateTextFormat(children, params)
  }, [children])

  const fontSize = useSize(size)

  return (
    <span className={className} style={{ fontSize }}>
      {text}
    </span>
  )
}

export const dateTextFormat = (
  str: string | number | undefined,
  {
    format = 'yyyy/MM/dd HH:mm',
    parseFormat = 'yyyyMMddHHmm',
    nullText,
    prefix,
    suffix,
    isNow,
  }: Params | undefined = {}
) => {
  if (isNow) {
    str = dateFnsFormat(new Date(), 'yyyyMMddHHmm')
    parseFormat = 'yyyyMMddHHmm'
  } else if (!str) return nullText || ''

  const text = (() => {
    const {
      YY, // YY
      yyyy,
      MM,
      dd,
      HH,
      mm,
    } = splitDate(str, parseFormat)

    let text = format as string
    if (yyyy) text = text.replace('yyyy', yyyy)
    if (YY) text = text.replace('YY', YY)
    if (MM) text = text.replace('MM', MM)
    if (dd) text = text.replace('dd', dd)
    if (HH) text = text.replace('HH', HH)
    if (mm) text = text.replace('mm', mm)

    if (
      text.includes('YY') ||
      text.includes('yyyy') ||
      text.includes('MM') ||
      text.includes('dd') ||
      text.includes('HH') ||
      text.includes('mm')
    ) {
      return null
    }

    return text
  })()

  return (prefix || '') + (text || nullText || '') + (suffix || '')
}
