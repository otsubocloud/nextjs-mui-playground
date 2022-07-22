export default function zeroPaddingNumber(
  value: string | number | undefined,
  numberOfDigits: number = 2
) {
  if (!value) return
  let prefix = [...Array(numberOfDigits)].map(() => '0').join()
  return `${prefix}${value}`.slice(-numberOfDigits)
}
