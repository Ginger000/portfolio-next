import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name='image'
          property='og:image'
          content='https://res.cloudinary.com/dsehzh5ha/image/upload/v1645205620/large_Screenshot_of_my_portfolio_website_6f6f93f2a9.png'
        />
      {/* <title>Ginger's Portfolio</title>
      <link rel="shortcut icon" href="/paper_cyan_favicon.ico" /> */}
      </Head>
      <body className='bg-back-blue'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}