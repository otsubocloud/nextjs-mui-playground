export type DateParseFormat =
  | 'yyyyMMddHHmm'
  | 'yyyyMMdd'
  | 'YYMMdd'
  | 'MMdd'
  | 'HHmm'

export default function splitDate(
  date: string | number | undefined,
  parseFormat: DateParseFormat = 'yyyyMMddHHmm'
): {
  YY?: string
  yyyy?: string
  MM?: string
  dd?: string
  HH?: string
  mm?: string
} {
  if (!date) return {}
  const value = String(date).trim()

  let YY = undefined
  let yyyy = undefined
  let MM = undefined
  let dd = undefined
  let HH = undefined
  let mm = undefined

  switch (parseFormat) {
    case 'HHmm':
      HH = value.slice(0, 2)
      mm = value.slice(2, 4)
      break
    case 'MMdd':
      MM = value.slice(0, 2)
      dd = value.slice(2, 4)
      break
    case 'YYMMdd':
      YY = value.slice(0, 2)
      yyyy = `20${YY}`
      MM = value.slice(2, 4)
      dd = value.slice(4, 6)
      break
    case 'yyyyMMdd':
    case 'yyyyMMddHHmm':
      YY = value.slice(2, 4)
      yyyy = value.slice(0, 4)
      MM = value.slice(4, 6)
      dd = value.slice(6, 8)
      HH = value.slice(8, 10)
      mm = value.slice(10, 12)
      break
  }
  return {
    YY,
    yyyy,
    MM,
    dd,
    HH,
    mm,
  }
}
