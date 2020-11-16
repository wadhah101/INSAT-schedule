import clsx from 'clsx'
import * as React from 'react'
import { WeekContext } from '../../../../pages/_app'
import styles from './style.module.scss'
import duration from 'dayjs/plugin/duration'
import dayjs from 'dayjs'
dayjs.extend(duration)

const ABswitcher: React.FunctionComponent = () => {
  const { week, setWeek } = React.useContext(WeekContext)

  React.useEffect(() => {
    const current = dayjs()
    const weekA = '2020-11-08T00:00:00'
    const duration = dayjs.duration(current.diff(weekA))
    if (duration.weeks() % 2) setWeek('B')
  }, [])

  return (
    <div
      onClick={() => setWeek((e) => (e === 'A' ? 'B' : 'A'))}
      className={clsx(
        styles.container,
        { [styles.active]: week === 'A' },
        'shadow-sm k'
      )}
    >
      <p className={styles.text}> A </p>
      <p className={styles.text}> B </p>
    </div>
  )
}

export default ABswitcher
