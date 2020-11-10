import Head from 'next/head'
import * as React from 'react'

const APP_NAME = 'next-pwa example'
const APP_DESCRIPTION = 'This is an example of using next-pwa plugin'
const headDescription = `time table for GL3 insat 2021/2020`

const AppHead: React.FunctionComponent = () => {
  return (
    <Head>
      <title>GL3 time table</title>
      <link rel="icon" type="image/webp" href="/favicon.webp" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="Description" content={headDescription} />

      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="description" content={APP_DESCRIPTION} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />
      {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
      {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
    </Head>
  )
}

export default AppHead
