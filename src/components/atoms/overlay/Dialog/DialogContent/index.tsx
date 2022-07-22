import common from '../common.module.scss'
import styles from './style.module.scss'
import clsx from 'clsx'
import { DialogContent as MuiDialogContent } from '@mui/material'
import { ReactNode, Children, useMemo } from 'react'
import useSpacing, { SpacingProps } from '@/utils/designSystem/useSpacing'
import useResponsible from '@/utils/designSystem/useResponsible'
import DialogActions from '@/components/atoms/overlay/Dialog/DialogActions'
import useColor, { ColorType } from '@/utils/designSystem/useColor'

type Props = {
  children: ReactNode
  fullContentFit?: boolean
  className?: string
  spacing?: SpacingProps
  bg?: ColorType
}
export default function DialogContent({
  children,
  fullContentFit,
  className,
  spacing,
  bg,
}: Props) {
  const { style } = useSpacing(spacing)
  const backgroundColor = useColor(bg)
  const { isPhone } = useResponsible()

  const [filterChildren, responsibleFooter] = useMemo(() => {
    let responsibleFooter = null
    const newChildren = Children.map(children, (row: any, i) => {
      if (
        typeof row === 'object' &&
        row?.type?.name === 'DialogContentResponsibleFooter'
      ) {
        responsibleFooter = row
        return null
      }
      return row
    })
    return [newChildren, responsibleFooter]
  }, [children])

  return (
    <>
      <MuiDialogContent
        className={clsx(
          common.paddingX,
          styles.content,
          fullContentFit && styles.fullContentFit,
          className
        )}
        style={{ ...style, backgroundColor }}
      >
        {filterChildren}
        {isPhone && responsibleFooter}
      </MuiDialogContent>
      {!isPhone && responsibleFooter && (
        <DialogActions>{responsibleFooter}</DialogActions>
      )}
    </>
  )
}
