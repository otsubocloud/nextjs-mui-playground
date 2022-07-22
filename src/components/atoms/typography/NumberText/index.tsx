import styles from './style.module.scss'
import { ReactNode, useMemo } from 'react'
import numberFormat from '@/utils/data/numberFormat'
import { isNumber } from 'lodash'
import clsx from 'clsx'
import useTextResponsible, {
  TextResponsibleBreakpoints,
} from '@/utils/designSystem/useTextResponsible'
import useSize, { SizeType } from '@/utils/designSystem/useSize'

const NULL_HYPHEN = '-'

type Props = {
  prefix?: string | ReactNode
  suffix?: string | null
  suffixSize?: 'small' | 'medium' | 'large'
  children?: number | string | boolean | null
  className?: string
  nullText?: string
  zeroText?: string
  nullClassName?: string
  decimalPoint?: number
  unstyled?: boolean
  textResponsible?: TextResponsibleBreakpoints
  fontSize?: SizeType
}

export default function NumberText({
  prefix,
  suffix = '円',
  suffixSize,
  children,
  className,
  nullText = NULL_HYPHEN,
  zeroText,
  nullClassName,
  unstyled,
  decimalPoint = 2,
  textResponsible,
  fontSize,
}: Props) {
  const text = useMemo(() => {
    return isNumber(Number(children))
      ? numberFormat(Number(children).toFixed(decimalPoint))
      : ''
  }, [children])

  const { responsibleFontSize, responsibleClassName } = useTextResponsible({
    value: text as string,
    breakpoints: textResponsible,
  })
  const notResponsibleFontSize = useSize(fontSize)

  if (
    (children === null || children === undefined || children === false) &&
    nullText
  ) {
    return (
      <span className={clsx(styles.nullText, nullClassName)}>{nullText}</span>
    )
  }
  if (zeroText && text === '0') {
    return (
      <span className={clsx(styles.nullText, nullClassName)}>{zeroText}</span>
    )
  }

  return (
    <span
      className={clsx(
        styles.root,
        { [styles.isUnstyled]: unstyled },
        responsibleClassName,
        className
      )}
      style={
        responsibleFontSize
          ? { fontSize: responsibleFontSize }
          : notResponsibleFontSize
          ? { fontSize: notResponsibleFontSize }
          : undefined
      }
    >
      {prefix && <span className={styles.root__prefix}>{prefix}</span>}
      <span className={styles.root__number}>{text}</span>
      <small
        className={clsx(styles.root__suffix, {
          [styles.isSmall]: suffixSize === 'small',
          [styles.isMedium]: suffixSize === 'medium',
          [styles.isLarge]: suffixSize === 'large',
        })}
      >
        {suffix}
      </small>
    </span>
  )
}
