import splitDate, { DateParseFormat } from '@/utils/date/splitDate'

export type DateFormat =
  | 'yyyy年MM月dd日 HH時mm分'
  | 'yyyy年MM月dd日'
  | 'yyyy年MM月'
  | 'YY年MM月dd日'
  | 'MM月dd日'
  | 'HH時dd分'
  | 'yyyy/MM/dd HH:mm'
  | 'yyyy/MM/dd'
  | 'yyyy.MM.dd'
  | 'YY/MM/dd'
  | 'YY/MM'
  | 'yyyy'
  | 'MM/dd'
  | 'HH:mm'

export default function formatDate(
  date: string,
  format: DateFormat = 'yyyy/MM/dd HH:mm',
  parseFormat: DateParseFormat = 'yyyyMMddHHmm'
) {
  const { YY, yyyy, MM, dd, HH, mm } = splitDate(date, parseFormat)

  let text = format as string
  if (yyyy) text = text.replace('yyyy', yyyy)
  if (YY) text = text.replace('YY', YY)
  if (MM) text = text.replace('MM', MM)
  if (dd) text = text.replace('dd', dd)
  if (HH) text = text.replace('HH', HH)
  if (mm) text = text.replace('mm', mm)
  return text
}
