import styles from './style.module.scss'
import { Box } from '@mui/material'
import clsx from 'clsx'
import { ReactNode } from 'react'
import useColor, { ColorType } from '@/utils/designSystem/useColor'

type Props = {
  color?: ColorType
  className?: string
  children?: ReactNode
}

const Background = ({ children, className, color = 'bg-base' }: Props) => {
  const background = useColor(color)

  return (
    <Box
      component="div"
      style={{ background }}
      className={clsx(styles.root, className)}
    >
      {children}
    </Box>
  )
}

export default Background
