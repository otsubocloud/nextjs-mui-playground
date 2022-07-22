/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	pageExtensions: ['page.tsx', 'page.ts'],
	typescript: {
		ignoreBuildErrors: true,
	},
	env: {
		SIMULATE_PROD_EDITOR: process.env.SIMULATE_PROD_EDITOR,
	},
}
