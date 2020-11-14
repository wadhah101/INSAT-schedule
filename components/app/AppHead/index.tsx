import Head from 'next/head'
import * as React from 'react'

const APP_NAME = 'INSAT schedule'
const APP_DESCRIPTION = 'A schedule for insat 2021-2020'

const AppHead: React.FunctionComponent = () => {
  return (
    <Head>
      <title>INSAT schedule</title>
      <link rel="icon" type="image/webp" href="icons/icon.svg" />
      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="description" content={APP_DESCRIPTION} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />

      <link rel="apple-touch-icon" sizes="any" href="/icons/icon512.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/icons/icon.svg" />
    </Head>
  )
}

export default AppHead
