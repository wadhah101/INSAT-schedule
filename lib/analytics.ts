import googleAnalytics from '@analytics/google-analytics'
import { Analytics } from 'analytics'

export const defaultAnalytics = Analytics({
  app: 'awesome-app',
  plugins: [
    googleAnalytics({
      trackingId: 'UA-145219066-1',
    }),
  ],
})
