import clsx from 'clsx'
import * as React from 'react'
import { WeekContext } from '../../../../pages/_app'
import styles from './style.module.scss'

// 1 for 'A'
// 0 for 'B

const ABswitcher: React.FunctionComponent = () => {
  const { week, setWeek } = React.useContext(WeekContext)

  return (
    <div
      onClick={() => setWeek((e) => (e === 'A' ? 'B' : 'A'))}
      className={clsx(
        styles.container,
        { [styles.active]: week === 'A' },
        'shadow-sm'
      )}
    >
      <p className={styles.text}> A </p>
      <p className={styles.text}> B </p>
    </div>
  )
}

export default ABswitcher
