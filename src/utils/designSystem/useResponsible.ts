import { useMediaQuery, useTheme } from '@mui/material'
import vars from '@/styles/vars'

export default function useResponsible(): {
  isMobile: boolean
  isMiniPhone: boolean
  isPhone: boolean
  isPC: boolean
  isTablet: boolean
  isTabletUp: boolean
  isLaptop: boolean
  isLaptopUp: boolean
  isDesktop: boolean
} {
  const { up, between, down } = useTheme().breakpoints
  const isMobile = useMediaQuery(down('md')) // <- Phone or Tablet
  const isPC = useMediaQuery(up('md')) // <- laptop or desktop

  const isMiniPhone = useMediaQuery(down('xs'))
  const isPhone = useMediaQuery(down('sm'))
  const isTablet = useMediaQuery(between('sm', 'md'))
  const isTabletUp = useMediaQuery(up('sm'))
  const isLaptop = useMediaQuery(between('md', 'lg'))
  const isLaptopUp = useMediaQuery(up('md'))
  const isDesktop = useMediaQuery(up('lg'))
  return {
    isMobile,
    isPC,
    isMiniPhone,
    isPhone,
    isTablet,
    isTabletUp,
    isLaptop,
    isLaptopUp,
    isDesktop,
  }
}

export const MEDIA = {
  minXs: `@media (min-width: ${vars['breakpoint-xs']})`,
  minSm: `@media (min-width: ${vars['breakpoint-sm']})`,
  minMd: `@media (min-width: ${vars['breakpoint-md']})`,
}
