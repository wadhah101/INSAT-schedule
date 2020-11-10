import * as React from 'react'
import { monday } from '../../../../data/gl3-2021-2020/schedule.data'
import SessionComp from '../SessionComp'
import styles from './style.module.scss'

const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

const TimeTable: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapperGrid}>
      {days.map((e) => (
        <div key={e}>
          <h2 className={styles.title} key={e}>
            {e}
          </h2>
          <ul className={styles.items}>
            {monday.sessions.map((e, ind) => (
              <SessionComp key={ind} data={e} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default TimeTable
