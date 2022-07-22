import { useEffect, useState } from 'react'
import vars from '@/styles/vars'

export type DeviceWindowSizeType = 'tablet' | 'phone' | 'desktop'

export default function useDeviceWindowSize() {
	const [device, setDevice] = useState<DeviceWindowSizeType>()
	useEffect(() => {
		const { outerWidth, outerHeight } = window
		const sm = parseInt(vars['breakpoint-sm'])
		const md = parseInt(vars['breakpoint-md'])
		const lg = parseInt(vars['breakpoint-lg'])

		const device: DeviceWindowSizeType = (() => {
			if (
				(outerHeight >= lg && outerWidth >= md) ||
				(outerHeight >= md && outerWidth >= lg)
			) {
				return 'desktop'
			} else if (
				(outerHeight >= md && outerWidth >= sm) ||
				(outerHeight >= sm && outerWidth >= md)
			) {
				return 'tablet'
			} else {
				return 'phone'
			}
		})()

		setDevice(device)
	}, [])

	return device
}
