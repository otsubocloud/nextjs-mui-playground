import styles from './style.module.scss'
import { forwardRef, useMemo } from 'react'
import locale from 'date-fns/locale/ja'
import TextField from '@/components/atoms/inputs/TextField'
import ReactDatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker'

registerLocale('ja', locale)

type Props = {
  date: string | null | undefined
  onChange: (date: string | null) => void
} & Omit<ReactDatePickerProps, 'onChange' | 'date'>

export default function DatePicker({ date, onChange, ...props }: Props) {
  const [year, month, day] = useMemo<number[]>(() => {
    if (!date) return []
    const year = Number(date.slice(0, 4))
    const month = Number(date.slice(4, 6))
    const day = Number(date.slice(6, 8))
    return [year, month, day]
  }, [date])

  const handleChange = (d: Date | null) => {
    if (!d) {
      onChange(null)
      return
    }
    const year = d.getFullYear()
    let month = String(1 + d.getMonth())
    let day = String(d.getDate())
    month = ('0' + month).slice(-2)
    day = ('0' + day).slice(-2)

    onChange(`${year}${month}${day}`)
  }
  return (
    <div className={styles.root}>
      <ReactDatePicker
        locale="ja"
        {...props}
        onChange={handleChange}
        selected={!year ? undefined : new Date(year, month, day)}
        dateFormat="yyyy/MM/dd"
        customInput={<CustomInput />}
      />
    </div>
  )
}

const CustomInput = forwardRef<
  any,
  { value: string; onClick: () => void; [key: string]: any }
>(function ForwardComponent({ value, onClick }) {
  return <TextField value={value} onClick={onClick} />
})
