import '../styles/index.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/theme'
import { AnalyticsProvider } from 'use-analytics'
import { defaultAnalytics } from '../lib/analytics'
import React from 'react'
import AppHead from '../components/app/AppHead'

import '../styles/scss/index.scss'
import Footer from '../components/app/Footer'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnalyticsProvider instance={defaultAnalytics}>
      <ThemeProvider theme={defaultTheme}>
        <AppHead />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </AnalyticsProvider>
  )
}

export default MyApp

export const placeholder = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quaerat in iste ad sit odit alias fugiat cum doloribus aperiam, unde numquam quod laboriosam. Ex provident nemo modi magni necessitatibus?`
