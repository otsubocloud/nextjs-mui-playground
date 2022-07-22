import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ThemeProvider, StyledEngineProvider } from '@mui/material'
import theme from '@/config/theme'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no"
				/>
			</Head>
			<RecoilRoot>
				<StyledEngineProvider injectFirst={true}>
					<ThemeProvider theme={theme}>
						<SessionProvider session={pageProps.session}>
							<Component {...pageProps} />
						</SessionProvider>
					</ThemeProvider>
				</StyledEngineProvider>
			</RecoilRoot>
		</>
	)
}

export default App
