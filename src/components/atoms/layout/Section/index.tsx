import styles from './style.module.scss'
import { ReactNode } from 'react'
import { Box } from '@mui/material'
import clsx from 'clsx'
import useSpacing, { SpacingProps } from '@/utils/designSystem/useSpacing'

type Props = {
  bg?: 'light' | 'white'
  children: ReactNode
  className?: string
  spacing?: SpacingProps
}

const Section = ({ children, className, bg, spacing }: Props) => {
  const { style } = useSpacing(spacing)
  return (
    <Box
      component="section"
      className={clsx(styles.root, className, {
        [styles.isWhite]: bg === 'white',
        [styles.isLight]: bg === 'light',
      })}
      style={style}
    >
      <>{children}</>
    </Box>
  )
}

export default Section
