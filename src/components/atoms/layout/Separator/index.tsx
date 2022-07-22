import styles from './style.module.scss'
import { Divider } from '@mui/material'
import clsx from 'clsx'
import useSpacing, { SpacingProps } from '@/utils/designSystem/useSpacing'

type Props = {
  spacing?: SpacingProps
  className?: string
  dividerHidden?: boolean
}

export default function Separator({
  spacing,
  className,
  dividerHidden,
}: Props) {
  const { style } = useSpacing(spacing)
  return (
    <div className={clsx(styles.root, className)} style={style}>
      {!dividerHidden && <Divider className={styles.divider} />}
    </div>
  )
}
