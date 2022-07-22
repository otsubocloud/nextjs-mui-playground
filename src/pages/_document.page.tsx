import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<title>idea</title>
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/destyle.css@3.0.0/destyle.min.css"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;900&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&family=Roboto+Condensed:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default AppDocument
