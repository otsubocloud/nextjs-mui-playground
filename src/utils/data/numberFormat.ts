export default function numberFormat(
  value?: number | string
): string | undefined {
  if (value !== undefined && value !== null) {
    return Number(value).toLocaleString('en-US')
  } else {
    console.warn('numberFormat: value is undefined')
    return
  }
}
