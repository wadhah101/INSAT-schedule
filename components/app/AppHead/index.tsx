import Head from 'next/head'
import * as React from 'react'

const headDescription = `time table for GL3 insat 2021/2020`

const AppHead: React.FunctionComponent = () => {
  return (
    <Head>
      <title>GL3 time table</title>
      <link rel="icon" type="image/webp" href="/favicon.webp" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="Description" content={headDescription} />
    </Head>
  )
}

export default AppHead
