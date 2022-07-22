import splitDate from '@/utils/date/splitDate'
import add from 'date-fns/add'
import format from 'date-fns/format'

export default function addDate(
  date: string,
  duration: Duration,
  optional: {
    firstDayConvert?: boolean
  } = {}
): string {
  const { firstDayConvert } = optional
  let months = duration.months || 0
  months -= 1
  const { yyyy, MM, dd } = splitDate(date)
  const baseDate = new Date(Number(yyyy), Number(MM), Number(dd))
  const newDate = add(baseDate, { ...duration, months })
  const newDateFormatted = format(newDate, 'yyyyMMdd')
  if (firstDayConvert) {
    const { yyyy: _yyyy, MM: _MM } = splitDate(newDateFormatted)
    if (duration.months !== undefined) {
      return `${_yyyy}${_MM}01`
    }
    if (duration.years !== undefined) {
      return `${_yyyy}0101`
    }
  }
  return newDateFormatted
}
