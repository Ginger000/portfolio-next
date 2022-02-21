import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <title>Ginger's Portfolio</title>
      {/* <link rel="icon" href="/front-mentor-favicon" /> */}
      <link rel="shortcut icon" href="/paper_cyan_favicon.ico" />
      </Head>
      <body className='bg-back-blue'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}