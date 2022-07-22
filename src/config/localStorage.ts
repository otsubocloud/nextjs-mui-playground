const LOCAL_STORAGE = {
	// scale
	get scale() {
		const value = localStorage.getItem('scale')
		return Number(value)
	},
	set scale(value: number) {
		localStorage.setItem('scale', String(value))
	},
	// moveSpeed
	get moveSpeed() {
		const value = localStorage.getItem('moveSpeed')
		return Number(value)
	},
	set moveSpeed(value: number) {
		localStorage.setItem('moveSpeed', String(value))
	},
	// autoSave
	get autoSave(): boolean {
		const value = localStorage.getItem('autoSave') || JSON.stringify(true)
		return JSON.parse(value)
	},
	set autoSave(value: boolean) {
		localStorage.setItem('autoSave', JSON.stringify(value))
	},
	// loginError
	get loginError(): boolean | null {
		const value = localStorage.getItem('loginError')
		return value ? JSON.parse(value) : false
	},
	set loginError(value: boolean | null) {
		if (value !== null) {
			localStorage.setItem('loginError', String(value))
		} else {
			localStorage.removeItem('loginError')
		}
	},
}

export default LOCAL_STORAGE
