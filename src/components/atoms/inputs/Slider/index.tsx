import styles from './style.module.scss'
import { Slider as MuiSlider, SliderProps } from '@mui/material'
import clsx from 'clsx'
import { ReactNode, useEffect, useRef } from 'react'

type Props = {
  className?: string
  value: number
  onProgress: (value: number) => void
  onFinish: (value: number) => void
  variant?: 'dial' | 'standard'
  sliderProps: SliderProps
  thumb?: ReactNode
  reverse?: boolean
}

export default function HorizontalSlider({
  className,
  value,
  onProgress,
  onFinish,
  sliderProps,
  thumb,
}: Props) {
  const styledProps: SliderProps = {
    classes: {
      root: styles.slider,
      thumb: styles.slider__thumb,
      track: styles.slider__track,
      rail: styles.slider__rail,
      mark: styles.slider__mark,
      valueLabel: styles.slider__valueLabel,
    },
  }

  // component:THumb がバグで機能しないので、カスタムでアイコンを入れ込む
  const rootRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (rootRef.current && thumbRef.current) {
      const muiThumb =
        rootRef.current.getElementsByClassName('MuiSlider-thumb')[0]
      muiThumb.appendChild(thumbRef.current)
    }
  }, [])

  return (
    <span ref={rootRef}>
      <MuiSlider
        {...sliderProps}
        className={clsx(styles.root, className)}
        value={value}
        onChange={(e, value) => onProgress(value as number)}
        onChangeCommitted={(e, value) => onFinish(value as number)}
        size="small"
        {...styledProps}
      />
      <span className={styles.thumbIcon} ref={thumbRef}>
        {thumb}
      </span>
    </span>
  )
}
