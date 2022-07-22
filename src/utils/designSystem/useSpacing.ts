export type SpacingProps = {
  m?: number //  margin
  mt?: number //	margin-top
  mr?: number //	margin-right
  mb?: number //	margin-bottom
  ml?: number //	margin-left
  mx?: number //	margin-left, margin-right
  my?: number //	margin-top, margin-bottom
  p?: number //	padding
  pt?: number //	padding-top
  pr?: number //	padding-right
  pb?: number //	padding-bottom
  pl?: number //	padding-left
  px?: number //	padding-left, padding-right
  py?: number //	padding-top, padding-bottom
}

export const spacingToRem = (space?: number) => {
  return space !== undefined ? `${space * 0.25}rem` : undefined
}

export default function useSpacing(props?: SpacingProps) {
  if (!props) return {}

  const { m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py } = props || {}

  return {
    style: {
      margin: spacingToRem(m),
      marginTop: spacingToRem(mt) || spacingToRem(my),
      marginRight: spacingToRem(mr) || spacingToRem(mx),
      marginBottom: spacingToRem(mb) || spacingToRem(my),
      marginLeft: spacingToRem(ml) || spacingToRem(mx),
      // padding
      padding: spacingToRem(p),
      paddingTop: spacingToRem(pt) || spacingToRem(py),
      paddingRight: spacingToRem(pr) || spacingToRem(px),
      paddingBottom: spacingToRem(pb) || spacingToRem(py),
      paddingLeft: spacingToRem(pl) || spacingToRem(px),
    },
  }
}
