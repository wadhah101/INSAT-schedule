import type { AppProps } from 'next/app'
import { AnalyticsProvider } from 'use-analytics'
import { defaultAnalytics } from '../lib/analytics'
import React, { useState } from 'react'
import AppHead from '../components/app/AppHead'
import '../styles/scss/index.scss'
import Header from '../components/app/Header'

export type WeekType = 'A' | 'B'

interface GlobalState {
  week: string
  setWeek: React.Dispatch<React.SetStateAction<WeekType>>
}

export const WeekContext = React.createContext<GlobalState>({
  week: 'A',
  setWeek: () => null,
})
const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const [week, setWeek] = useState<WeekType>('A')
  return (
    <AnalyticsProvider instance={defaultAnalytics}>
      <WeekContext.Provider value={{ week, setWeek }}>
        <Header />
        <Component {...pageProps} />
      </WeekContext.Provider>
      <AppHead />
    </AnalyticsProvider>
  )
}

export default MyApp
