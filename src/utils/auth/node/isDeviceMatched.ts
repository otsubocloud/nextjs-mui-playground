export default function isDeviceMatched(req: any) {
	if (process.env.NODE_ENV === 'development') return true
	const userAgent = req.headers.get('user-agent')
	return (
		(userAgent?.match(/Macintosh; Intel Mac OS X/gi) &&
			(userAgent?.match(/Safari/gi) || userAgent?.match(/Chrome/gi))) ||
		userAgent?.match(/iPhone; CPU iPhone OS /gi)
	)
}
