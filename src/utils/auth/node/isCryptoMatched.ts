import crypto from 'crypto'

export default function isCryptoMatched(
	value: string | undefined,
	cryptoValue: string
): boolean {
	if (!value) return false
	const detectValue = crypto
		.createHash('sha256')
		.update(value, 'utf8')
		.digest('hex')
	return detectValue === cryptoValue
}
